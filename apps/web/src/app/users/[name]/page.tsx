'use client';

import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from 'ui';

import RepoList from '../../components/RepoList';

export default function UserPage({ params: { name } }) {
  const router = useRouter();

  return (
    <section className='py-8'>
      <div className='container'>
        <div className='my-12 '>
          <Button onClick={() => router.back()}>Back</Button>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <RepoList name={name} />
        </Suspense>
      </div>
    </section>
  );
}
