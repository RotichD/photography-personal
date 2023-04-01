'use client';
import getStripe from '../../../utils/get-stripejs';
import PresetCard from '../../components/PresetCard';
import vol1 from '../../../public/images/vol1.jpg';

getStripe();

function Shop() {
  
  return (
    <div className='w-full px-4 lg:px-8'>
      <h1 className='font-ovo text-5xl mb-8 mt-5'>Presets</h1>
      <div className='border-b rounded w-2/6 mx-auto my-8'></div>
      <div className='space-y-4 mb-5 flex flex-col items-center p-8 border text-justify  shadow xl:text-lg text-gray-800'>
        <p className='max-w-lg '>
          I created these presets for the Ricoh GR community. They are
          completely <span className='font-bold'>free</span> to download and the
          donation is optional.
        </p>
        <p className='max-w-lg italic text-sm text-gray-500'>
          While it is possible* to use these with other cameras, you will not get
          the camera match profiles which are exclusive to the GR lineup. These
          profiles drastically affect the look of the image.
        </p>
      </div>
      <div className='grid xl:grid-cols-2 xl:space-x-2'>
        <PresetCard
          downloadLocation='35mm_Sniper_Vol.1.zip'
          staticImage={vol1}
          title='35mm_Sniper Vol.1'
          subtitle='Lightroom Preset Pack'
          description='For Ricoh GRIII & GRIIIX. Not fully compatible with other cameras. Certain presets depend on the camera match profile only found in the GR3 line.'
        />
      </div>
    </div>
  );
}

export default Shop;
