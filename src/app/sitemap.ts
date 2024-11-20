import { PostPreviewRes } from '@/models/posts';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    method: 'GET',
  }).then((response) => response.json());

  const urls: MetadataRoute.Sitemap = posts.map((post: PostPreviewRes) => ({
    url: `https://sebell.site/posts/${post.postId}?category=${post.category}`,
    lastModified: post.date,
    changeFrequency: 'weekly',
    priority: 1,
  }));

  return [
    {
      url: 'https://sebell.site',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...urls,
  ];
}
