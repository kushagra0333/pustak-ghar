import { createClient } from "@sanity/client";


const client = createClient({
  projectId: 'rmd8itbg',
  dataset: 'production',
    useCdn: true,
  });

  export default client;
  