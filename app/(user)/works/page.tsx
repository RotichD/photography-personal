import { client } from '../../../lib/sanity.client';
import { groq } from 'next-sanity';
import MasonryGallery from '../../components/MasonryGallery';
import urlFor from '../../../lib/urlFor';

const query = groq`
  *[_type == "imageCollection"]
`;

export default async function Works() {
  const collections = await client.fetch(query);
  console.log(collections);
  return (
    <div className='px-4 lg:px-8'>
      <h1 className='font-ovo text-5xl mb-8 mt-5'>Works</h1>
      <div className='border-b rounded w-2/6 mx-auto my-8'></div>

      <MasonryGallery collections={collections} />
    </div>
  );
}
