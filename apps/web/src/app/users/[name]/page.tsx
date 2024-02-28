import Link from 'next/link';

const userDetails = ({ params: { name } }) => {
  return (
    <div className='card'>
      <div className='flex w-full justify-center text-3xl font-bold'>
        {name}
      </div>

      <Link href='/users' className='btn btn-back'>
        GO BACK
      </Link>
    </div>
  );
};

export default userDetails;
