import { client } from './sanity.client';
import ImageUrlBuilder from '@sanity/image-url';

//pre configuered url builder from sanity client
const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
