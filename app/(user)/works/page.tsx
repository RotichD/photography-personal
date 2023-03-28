import Image, { StaticImageData } from "next/image";
import images from "../../../lib/works.images";
import MasonryGallery from "../../components/MasonryGallery";

function Works() {
  return (
    <>
    <MasonryGallery images={images} title='Color' subtitle="Assorted Street Work"/>
    <MasonryGallery images={images} title='Color' subtitle="Assorted Street Work"/>
    </>
  );
}
//start
//max-w-xs lg:max-w-sm 2xl:max-w-md
export default Works;
