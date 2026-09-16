import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const slug = z
  .string()
  .trim()
  .min(1, 'A slug is required.')
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase, hyphen-separated slug.');

const projectSchema = z
  .object({
    title: z.string().trim().min(1, 'A project title is required.'),
    slug,
    summary: z.string().trim().min(1, 'A project summary is required.'),
    year: z.number().int().min(2000).max(2100),
    featured: z.boolean(),
    featuredOrder: z.number().int().positive(),
    tech: z.array(z.string().trim().min(1)).min(1, 'List at least one technology.'),
    highlights: z.array(z.string().trim().min(1)).min(1, 'List at least one highlight.'),
    github: z.url().optional(),
    demo: z.url().optional(),
    heroImage: z.string().trim().min(1).optional(),
    heroWidth: z.number().int().positive().optional(),
    heroHeight: z.number().int().positive().optional(),
    heroAlt: z
      .string()
      .trim()
      .min(10, 'Alternative text should briefly describe the image.')
      .optional(),
    status: z.string().trim().min(1).optional(),
  })
  .superRefine(({ heroImage, heroAlt, heroWidth, heroHeight }, context) => {
    if (heroImage && !heroAlt) {
      context.addIssue({
        code: 'custom',
        path: ['heroAlt'],
        message: 'Meaningful heroAlt text is required when heroImage is configured.',
      });
    }

    if (heroAlt && !heroImage) {
      context.addIssue({
        code: 'custom',
        path: ['heroAlt'],
        message: 'Remove heroAlt or configure the heroImage it describes.',
      });
    }

    if (heroImage && (!heroWidth || !heroHeight)) {
      context.addIssue({
        code: 'custom',
        path: ['heroWidth'],
        message: 'heroWidth and heroHeight are required when heroImage is configured.',
      });
    }

    if (!heroImage && (heroWidth || heroHeight)) {
      context.addIssue({
        code: 'custom',
        path: ['heroWidth'],
        message: 'Remove heroWidth and heroHeight or configure the heroImage they describe.',
      });
    }
  });

const postSchema = z
  .object({
    title: z.string().trim().min(1, 'A post title is required.'),
    slug,
    summary: z.string().trim().min(1, 'A post summary is required.'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string().trim().min(1)).default([]),
  })
  .refine(({ publishedAt, updatedAt }) => !updatedAt || updatedAt >= publishedAt, {
    path: ['updatedAt'],
    message: 'updatedAt cannot be earlier than publishedAt.',
  });

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: projectSchema,
});

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

export const collections = { projects, posts };
