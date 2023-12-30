import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isDraft: z.boolean().default(false),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    img_logo: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    github: z.string(),
    website: z.string(),
    technologies: z.array(z.object({
      name: z.string(),
      route: z.string(),
    })),
  }),
});

export const collections = { projects: projectsCollection };
