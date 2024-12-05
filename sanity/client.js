import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import "dotenv/config";

export const sanityClient = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: process.env.API_VERSION,
  useCdn: false,
});

const imageBuilder = imageUrlBuilder(sanityClient);

export function getImageUrl(source) {
  return imageBuilder.image(source);
}
