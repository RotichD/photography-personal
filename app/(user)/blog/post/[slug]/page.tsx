import { groq } from 'next-sanity';
import { client } from '../../../../../lib/sanity.client';
import Image from 'next/image';
import urlFor from '../../../../../lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponent } from '../../../../components/RichTextComponents';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 120;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']{
        slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='px-4 lg:px-8 pb-20 font-quattro'>
      <section className='space-y-2 border shadow text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <section className='p-5 bg-gray-900 w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-4xl font-ovo'>{post.title}</h1>
                <p className=''>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              <div className='flex items-center space-x-2'>
                {post.author.image && (
                  <Image
                    className='rounded-full'
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    height={40}
                    width={40}
                  />
                )}

                <div className='w-64'>
                  <h3 className='text-lg font-semibold'>{post.author.name}</h3>
                </div>
              </div>
              
            </div>

            <div>
              <h2 className=' italic pt-10'>{post.description}</h2>
              <div className='flex items-center justify-center mt-8 space-x-2'>
                {post.categories.map((category) => (
                  <div
                    className='px-4 py-1 bg-white rounded-sm shadow'
                    key={category._id}
                  >
                    <p className='text-xs text-gray-900'>{category.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <div className='absolute top-0 w-full h-full opacity-20 blur-sm'>
            <Image
              className='object-cover object-center'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponent} />
    </article>
  );
}

export default Post;
