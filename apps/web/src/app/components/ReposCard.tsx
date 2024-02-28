import { EyeOpenIcon, Share1Icon, StarIcon } from '@radix-ui/react-icons';

export default function RepoCard({
  repo,
}: {
  repo: {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
  };
}) {
  return (
    <div
      className='flex flex-col justify-between rounded-lg border border-gray-200 p-4 shadow-md transition duration-300 ease-in-out hover:shadow-lg'
      style={{ width: '300px', height: '300px' }}
    >
      <h2 className='mb-2 text-xl font-bold'>{repo.name}</h2>
      <p
        className='mb-4 overflow-hidden overflow-ellipsis text-gray-600'
        style={{ maxHeight: '100px' }}
      >
        {repo.description}
      </p>
      <div className='flex justify-between'>
        <div className='mr-4 flex items-center'>
          <StarIcon className='mr-4' />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='mr-4 flex items-center'>
          <Share1Icon className='mr-4' />
          <span>{repo.forks_count}</span>
        </div>
        <div className='flex items-center'>
          <EyeOpenIcon className='mr-4' />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </div>
  );
}
