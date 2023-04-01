import Image from 'next/image';
import urlFor from '../../lib/urlFor';

type Props = {
  collections: ImageCollection[];
};

function MasonryGallery({ collections }: Props) {

  const reversed = collections.reverse();
  return (
    <>
      {reversed.map((collection) => (
        <div className=' w-full mb-24'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-end mb-2'>
            <p className='font-ovo text-3xl md:text-4xl'>{collection.title}</p>
            <p className='text-gray-500 text-sm md:text-right md:max-w-xs'>
              {collection.description}
            </p>
          </div>
          <div className=' columns-1 space-y-4 sm:columns-2 md:columns-3 xl:columns-4'>
            {collection.images.map((image: ImageObject) => {
              return (
                <div
                  className={`relative h-full  ${
                    image.isLandscape ? 'col-span-2' : 'col-span-1'
                  } mt-0`}
                  key={image.alt}
                >
                  <Image
                    className={`object-cover object-center h-full w-full`}
                    src={`${urlFor(image.image).url()}${image.isLandscape ? '?w=1920' : '?w=1080'}`}
                    alt={image.alt}
                    width={400}
                    height={500}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

export default MasonryGallery;
