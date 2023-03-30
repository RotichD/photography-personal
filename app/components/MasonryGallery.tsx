import Image from "next/image";

function MasonryGallery({images, title, subtitle }:Gallery) {
  return (
    <div className=" w-full pt-24 px-8  ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end pb-8">
            <p className="font-ovo text-3xl md:text-5xl">{title}</p>
            <p className="text-gray-400 md:text-right md:max-w-xs">{subtitle}</p>
        </div>
      <div className=" columns-1 space-y-4 md:space-y-0 md:grid md:grid-cols-3 xl:grid-cols-4 sm:gap-4">
        {images.map((image: galleryImage, index: number) => {
          return (
            <div className={`relative h-full  ${image.landscape ? 'col-span-2': 'col-span-1'} mt-0`} key={index}>
              <Image
                className={`object-cover h-full w-full`}
                src={image.staticImage}
                alt="photography example"
              />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MasonryGallery