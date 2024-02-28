import clsx from 'clsx';
import Link from 'next/link';
import { Card } from 'ui';

import Search from './search';

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string; page: number };
}) {
  const search = searchParams.search;
  const page = Number(searchParams.page) || 1;
  const pageSize = 12;

  const response = await fetch(
    `https://api.github.com/search/users?q=${search}&per_page=${pageSize}&page=${page}`
  );

  const data = await response.json();

  return (
    <section className='py-8'>
      <div className='container'>
        <div className='my-12 flex items-center justify-between gap-x-4'>
          <div className='grow'>
            <Search search={search} />
          </div>
          <div className='flex space-x-2'>
            <Link
              href={{
                pathname: '/users',
                query: {
                  ...(search ? { search } : {}),
                  page: page > 1 ? page - 1 : 1,
                },
              }}
              className={clsx(
                'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
                page <= 1 && 'pointer-events-none opacity-50'
              )}
            >
              Previous
            </Link>
            <Link
              href={{
                pathname: '/users',
                query: {
                  ...(search ? { search } : {}),
                  page: page + 1,
                },
              }}
              className={clsx(
                'rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
                data.total_count / pageSize <= page &&
                  'pointer-events-none opacity-50'
              )}
            >
              Next
            </Link>
          </div>
        </div>

        <ul
          role='list'
          className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'
        >
          {data.items?.map((user) => (
            <li key={user.id.toString()} className='relative'>
              <Card
                title={user.login}
                subTitle={user.id}
                src={user.avatar_url}
                href={`/users/${user.login}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
