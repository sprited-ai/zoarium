import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional().nullable(),
    canonical: z.string().optional().nullable(),
    status: z.string().optional(),
    url: z.string().optional().nullable(),
  }),
});

export const collections = { posts };
