import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  staticImage: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  downloadLocation: string;
  visible?: boolean;
}

function PresetCard({
  staticImage,
  title,
  subtitle,
  description,
  downloadLocation,
  visible = false,
}: Props) {
  const [isVisible, setIsVisible] = useState(visible);

  const handleDlClick = () => {
    setIsVisible(true);
  };

  return (
    <div className='border border-gray-200 shadow mb-8  bg-white grid sm:grid-cols-2 only:col-span-2'>
      <div className='border-b  bg-gray-400 sm:border-b-0 sm:border-r'>
        <Image
          src={staticImage}
          alt='Lightroom Preset Pack Image'
          className='h-full object-cover object-center'
        />
      </div>

      <div className='flex flex-col justify-center lg:p-8 xl:p-4'>
        <div className='p-4'>
          <h3 className='text-xl md:text-2xl font-semibold font-ovo text-black'>
            {title}
          </h3>
          <h4 className='text-gray-900 text-lg md:text-xl mb-2'>{subtitle}</h4>
          <p className='text-gray-700 text-sm md:text-base'>{description}</p>
        </div>

        <form
          action='/api/checkout_sessions'
          method='POST'
          className=' flex flex-col justify-center p-4 space-y-2'
        >
          <button
            type='submit'
            role='link'
            className={`${
              isVisible && 'hidden'
            } text-white bg-green-700 hover:bg-green-800 focus:ring transition duration-200 rounded shadow px-5 py-1`}
          >
            Donate $10
          </button>
          <button
            type='button'
            onClick={handleDlClick}
            className={`${
              isVisible && 'hidden'
            } hover:bg-gray-200 transition duration-200 focus:ring px-5 py-1 rounded shadow border underline text-sm`}
          >
            Show free download instead
          </button>

          {/* Download Button: Presets are free therefore they do not need to be hidden */}
          <a
            type='button'
            href={`/preset-packs/${downloadLocation}`}
            download={`${downloadLocation}`}
            className={`${
              !isVisible && 'hidden'
            } bg-black text-white rounded shadow px-5 py-1 flex justify-center items-center focus:ring hover:bg-neutral-800 transition duration-200`}
          >
            <span className='mr-2'>Download</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
              />
            </svg>
          </a>
        </form>
      </div>
    </div>
  );
}

export default PresetCard;
