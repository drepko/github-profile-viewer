import clsx from 'clsx';
import Link from 'next/link';
import { Suspense } from 'react';

import UserList from '../components/UserList';
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
        <Suspense
          fallback={<div>Loading...</div>}
          key={JSON.stringify(searchParams)}
        >
          <UserList data={data.items} />
        </Suspense>
      </div>
    </section>
  );
}
