'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from '../../lib/images';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

function Carousel() {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }
  }, [carousel]);

  const handleDragStart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (carousel.current) {
      carousel.current.style.cursor = 'grabbing';
      carousel.current.style.userSelect = 'none';
      const startX = event.pageX - carousel.current.offsetLeft;
      let scrollLeft = carousel.current.scrollLeft;

      const handleMouseMove = (event: MouseEvent) => {
        if (carousel.current) {
          const x = event.pageX - carousel.current.offsetLeft;
          const walk = (x - startX) * 2;
          carousel.current.scrollLeft = scrollLeft - walk;
        }
      };

      const handleMouseUp = () => {
        if (carousel.current) {
          carousel.current.style.cursor = 'grab';
          carousel.current.style.removeProperty('user-select');
          carousel.current.removeEventListener('mousemove', handleMouseMove);
          carousel.current.removeEventListener('mouseup', handleMouseUp);
        }
      };

      carousel.current.addEventListener('mousemove', handleMouseMove);
      carousel.current.addEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <div className='mt-8'>
      <Link href={'/works'}>
        <p className='font-ovo text-2xl text-gray-600 hover:text-black hover:drop-shadow transition duration-200'>Recent Work</p>
      </Link>
      <motion.div
        ref={carousel}
        className=' cursor-grab overflow-hidden'
        onMouseDown={handleDragStart}
        onMouseUp={() => {
          if (carousel.current) {
            carousel.current.style.cursor = 'grab';
            carousel.current.style.removeProperty('user-select');
          }
        }}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='flex space-x-2 shadow'
        >
          {images.map((image: StaticImageData, index: number) => {
            return (
              <motion.div className='  ' key={index}>
                <Image
                  className='max-w-xs lg:max-w-sm 2xl:max-w-md'
                  src={image}
                  alt='photography example'
                  height={400}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel;
