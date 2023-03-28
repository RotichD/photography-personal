import Image, { StaticImageData} from "next/image";

interface Gallery {
    images: StaticImageData[];
    title?: string;
    subtitle?: string;
}

function MasonryGallery({images, title, subtitle }:Gallery) {
  return (
    <div className=" w-full pt-24 px-8  ">
        <div className="flex flex-col md:flex-row md:justify-between">
            <p className="font-ovo text-3xl">{title}</p>
            <p className="text-gray-400">{subtitle}</p>
        </div>
      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 space-y-4">
        {images.map((image: StaticImageData, index: number) => {
          return (
            <div className="relative" key={index}>
              <Image
                className="object-cover"
                src={image}
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