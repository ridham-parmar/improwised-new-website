import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const clients = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/clients', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		image: image()
	}),
});
const testimonials = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/testimonials', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		author: z.string(),
		description: z.string(),
		authorDesignation: z.string(),
		profileImage: image(),
	}),
});
const industries = defineCollection({

	loader: glob({ base: './src/content/industries', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		icon: image(),
		description: z.string()
	}),
});
const benefits = defineCollection({

	loader: glob({ base: './src/content/benefits', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		icon: image(),
		description: z.string()
	}),
});
const services = defineCollection({

	loader: glob({ base: './src/content/services', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		slug: z.string(),
		image: image(),
		description: z.string()
	}),
});


export const collections = { clients, testimonials, industries, benefits, services };

