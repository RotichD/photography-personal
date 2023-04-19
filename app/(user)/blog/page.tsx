import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import { PreviewSuspense } from 'next-sanity/preview';
import BlogList from '../../components/BlogList';
import PreviewBlogList from '../../components/PreviewBlogList';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function BlogPage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div>
            <p>Loading Preview Data...</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return (
    <div className='px-4 lg:px-8'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end  mb-8'>
        <h1 className='font-ovo text-5xl mt-5'>Blog</h1>
        <p className='text-gray-800 max-w-xs sm:text-right'>
          I write about photography and Ricoh GRIIIx related topics.
        </p>
      </div>

      <div className='border-b rounded w-2/6 mx-auto my-8'></div>

      <h2 className='text-3xl md:text-4xl font-ovo mb-2'>Recent Posts:</h2>

      <BlogList posts={posts} />
    </div>
  );
}
