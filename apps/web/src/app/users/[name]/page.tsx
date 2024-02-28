import Link from 'next/link';
import { Suspense } from 'react';

import RepoList from '../../components/RepoList';

const userPage = ({ params: { name } }) => {
  return (
    <section className='py-8'>
      <div className='container'>
        <div className='my-12 '>
          <Link
            href='/users'
            className='rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800'
          >
            Back
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <RepoList name={name} />
        </Suspense>
      </div>
    </section>
  );
};

export default userPage;
