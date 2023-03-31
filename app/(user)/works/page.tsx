import Image from 'next/image';
import galleryImages from '../../../lib/works.images';
import MasonryGallery from '../../components/MasonryGallery';

function Works() {
  return (
    <div className='px-4 lg:px-8'>
      <h1 className='font-ovo text-5xl mb-8 mt-5'>Works</h1>
      <MasonryGallery
        images={galleryImages}
        title='Street in Color'
        subtitle='A selection of Street Photography in color. Shot on GRIIIx'
      />
      <MasonryGallery
        images={galleryImages}
        title='Color'
        subtitle='Assorted Street Work'
      />
    </div>
  );
}
//start
//max-w-xs lg:max-w-sm 2xl:max-w-md
export default Works;
