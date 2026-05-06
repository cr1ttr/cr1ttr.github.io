import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

function newCollection(globStr: string) {
  return defineCollection({
    loader: glob({
      base: globStr,
      pattern: '**/*.{md,mdx}'
    }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
    }),
  });
}

const blog = newCollection("./src/pages/blog/posts");

export const collections = { blog };
