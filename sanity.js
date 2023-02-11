import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "q1u6yqp1",
  dataset: "production",
  useCnd: true,
  apiVersion: "2021-10-21",
});
const builder = imageUrlBuilder(client);
export const url = (source) => builder.image(source);

export default client;
