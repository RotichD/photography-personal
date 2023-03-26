import Link from 'next/link';

function Footer() {
  return (
    <footer className='p-8 bg-gray-100 absolute bottom-0 w-full text-gray-700 text-sm lg:text-base '>
      <div className='space-y-5 flex flex-col sm:items-center md:flex-row max-w-xl mx-auto lg:space-x-8'>
        <div className='md:mr-auto'>
          <p className='text-base font-ovo font-semibold'>
            Dylan Rotich Photography
          </p>
          <p>&copy;Dylan Rotich 2023. All rights reserved.</p>
        </div>

        <div className='grid grid-cols-2 max-w-md  sm:max-w-md'>
          <div>
            <nav>
              <p className='font-semibold'>Quick Links</p>
              <ul>
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <li>
                  <Link href={'/blog'}>Blog</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className='font-semibold'>Resources</p>
            <ul>
              <li>
                <Link href={'https://vsco.co'}>VSCO</Link>
              </li>
              <li>
                <Link href={'https://vsco.co/dylanrotich/gallery'}>My VSCO Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
