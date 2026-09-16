import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('posts');

  return posts
    .filter(({ data }) => !data.draft)
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}
