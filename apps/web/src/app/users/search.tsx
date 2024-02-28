'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function Search({ search }: { search?: string }) {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/users`);
    } else {
      router.push(`/users?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className='relative rounded-md shadow-sm'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'></div>
      <input
        value={text}
        placeholder='Search users...'
        onChange={(e) => setText(e.target.value)}
        className='sm: block w-full rounded-md border-0 py-1.5 pl-10 text-black ring-1 ring-inset placeholder:text-gray-400 focus:outline-none sm:text-sm'
      />
    </div>
  );
}
