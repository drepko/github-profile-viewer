import { ReactNode } from 'react';

export function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}): JSX.Element {
  return (
    <button
      onClick={() => onClick()}
      className='rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800'
    >
      {children}
    </button>
  );
}
