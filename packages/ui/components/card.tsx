import Image from 'next/image';
import Link from 'next/link';

export function Card({
  title,
  subTitle,
  src,
  href,
}: {
  title: string;
  subTitle: string;
  src: string;
  href: string;
}): JSX.Element {
  return (
    <Link href={href}>
      <div className='group block aspect-square w-full overflow-hidden rounded-lg bg-gray-100'>
        <Image
          src={src}
          alt=''
          className='object-cover group-hover:opacity-75'
          width={300}
          height={300}
        />
      </div>
      <p className='mt-2 block truncate font-medium'>{title}</p>
      <p className='block text-sm font-medium' style={{ color: 'grey' }}>
        {subTitle}
      </p>
    </Link>
  );
}
