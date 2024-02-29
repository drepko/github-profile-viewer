import Link from 'next/link';

export default function Home() {
  return (
    <div className='mt-8 items-center space-y-4'>
      <div className='flex w-full flex-col items-center justify-center text-3xl font-bold'>
        GITHUB PROFILE VIEWER
        <Link
          href='/users'
          className='my-4 rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800'
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
