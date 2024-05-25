import { client } from './sanityClient';

export async function fetchBlogPosts() {
    const CONTENT_QUERY = `*[_type == "post"] {
        ...,
        content[] {
          _type,
          ...,
          defined(string) => string
        },
        tags[],
        location { 
          ...
        }
      }
      `;
    const posts = await client.fetch(CONTENT_QUERY);
    return posts;
}
