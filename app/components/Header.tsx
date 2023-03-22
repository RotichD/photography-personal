import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/headshot.jpg';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex flex-row items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-full'
            src={profilePic}
            width={50}
            height={50}
            alt='picture of dylan'
          />
        </Link>
        <h1>Dylan's Blog</h1>
      </div>

      <div>
        <Link
          href='https://github.com/RotichD'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-amber-500 flex items-center rounded-full'
        >
          View my Github
        </Link>
      </div>
    </header>
  );
}

export default Header;
