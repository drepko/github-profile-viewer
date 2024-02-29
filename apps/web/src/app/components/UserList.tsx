import { Card } from 'ui';

export default async function UserList({
  data,
}: {
  data: { id: number; login: string; avatar_url: string }[];
}) {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'
    >
      {data?.map((user) => (
        <li key={user.id.toString()} className='relative'>
          <Card
            title={user.login}
            subTitle={user.id.toString()}
            src={user.avatar_url}
            href={`/users/${user.login}`}
          />
        </li>
      ))}
    </ul>
  );
}
