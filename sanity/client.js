import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import "dotenv/config";

export const sanityClient = createClient({
  projectId: "ewlslp6g",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const imageBuilder = imageUrlBuilder(sanityClient);

export function getImageUrl(source) {
  return imageBuilder.image(source);
}
