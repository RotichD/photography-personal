import Image from "next/image";
import galleryImages from "../../../lib/works.images";
import MasonryGallery from "../../components/MasonryGallery";

function Works() {
  return (
    <>
    <MasonryGallery images={galleryImages} title='Street in Color' subtitle="A selection of Street Photography in color. Shot on GRIIIx"/>
    <MasonryGallery images={galleryImages} title='Color' subtitle="Assorted Street Work"/>
    </>
  );
}
//start
//max-w-xs lg:max-w-sm 2xl:max-w-md
export default Works;
