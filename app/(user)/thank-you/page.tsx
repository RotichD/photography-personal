'use client';
import React from 'react';
import vol1 from '../../../public/images/vol1.jpg';
import PresetCard from '../../components/PresetCard';

function ThankYouPage() {
  return (
    <div className='w-full px-8'>
      <h1 className='font-ovo text-5xl mb-8 mt-5'>
        Thank You for your Donation!
      </h1>
      <div className='border-b rounded w-2/6 mx-auto my-8'></div>
      <p className='mb-5'>
        Given that these presets are already free, I greatly appreciate your kind
        gesture.
      </p>
      <div className='grid xl:grid-cols-2 xl:space-x-2'>
      <PresetCard
          downloadLocation='35mm_Sniper_Vol.1.zip'
          staticImage={vol1}
          title='35mm_Sniper Vol.1'
          subtitle='Lightroom Preset Pack'
          description='For Ricoh GRIII & GRIIIX. Not fully compatible with other cameras. Certain presets depend on the camera match profile only found in the GR3 line.'
          visible={true}
        />
      </div>
    </div>
  );
}

export default ThankYouPage;
