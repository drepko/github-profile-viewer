import RepoCard from './ReposCard';

export default async function RepoList({ name }: { name: string }) {
  const response = await fetch(`https://api.github.com/users/${name}/repos`);

  const data = await response.json();

  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'
    >
      {data.map((repo) => (
        <li key={repo.id.toString()} className='relative'>
          <RepoCard repo={repo} />
        </li>
      ))}
    </ul>
  );
}
