function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Dylan's Photography Blog</h1>
        <h2 className="mt-5 md:mt-0">
            Welcome to the blog
        </h2>

      </div>
      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Qui error nulla odit ipsum omnis soluta et mollitia
      </p>
    </div>
  );
}

export default Banner;
