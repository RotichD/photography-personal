import Image from 'next/image';
import urlFor from '../../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24'>
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute
            key={post._id}
            route={`/blog/post/${post.slug.current}`}
          >
            <div className='flex flex-col shadow h-full'>
              <div className='relative w-full h-48 xl:h-72 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                <Image
                  className='object-cover object-center'
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
              </div>
              <div className='p-4 flex flex-col'>
                <div>
                  <p className='text-gray-500 text-sm'>
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <h5 className='text-lg font-semibold text-gray-900 font-ovo'>
                    {post.title}
                  </h5>
                  <p className='text-gray-700'>{post.description}</p>
                </div>
              </div>
              <div className='flex space-x-2 p-4 mt-auto'>
                {post.categories.map((category) => (
                  <div className='px-4 py-1 bg-black rounded-sm shadow' key={category._id}>
                    <p className='text-xs text-gray-200'>{category.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
      <div className='w-full h-32'></div>
    </div>
  );
}

export default BlogList;
