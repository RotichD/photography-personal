import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

export default async function HomePage() {
  return (
    <div className='max-w-7xl px-4 lg:px-8'>
      <Hero />
      <Carousel />

      <p className='text-xs lg:text-base text-gray-400 italic flex flex-row items-center gap-2'>
        Swipe{' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-3 h-3'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59'
          />
        </svg>
      </p>

      <div className='p-8 flex flex-col items-center sm:mt-8 md:mt-16'>
        <p className='text-center lg:max-w-3xl md:text-2xl xl:max-w-4xl text-gray-600 py-8'>
          My camera is an extension of myself. I use photography to communicate,
          tell stories, and challenge my creativity.
        </p>
      </div>
    </div>
  );
}
