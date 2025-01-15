import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { array } from 'astro:schema';

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
const blogs = defineCollection({

	loader: glob({ base: './src/content/blogs', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		slug: z.string(),
		image: image(),
		description: z.string(),
		tags: z.array(z.string()),
		author: z.string(),
		publishDate: z.coerce.date(),
	}),
});

const casestudies = defineCollection({

	loader: glob({ base: './src/content/casestudies', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		image: image(),
		description: z.string()
	}),
});
const teams = defineCollection({

	loader: glob({ base: './src/content/teams', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		name: z.string(),
		image: image(),
		designation: z.string().optional(),
		linkedin: z.string().optional()
	}),
});

const jobs = defineCollection({

	loader: glob({ base: './src/content/jobs', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () => z.object({
		title: z.string(),
		slug: z.string(),
		experience: z.string(),
		payRange: z.string(),
		type: z.string(),
		description:z.string(),
		datePosted: z.coerce.date(),
		expiryDate: z.coerce.date(),
		qualification:z.string(),
		jobSkills:z.array(z.string()),
		location:z.string(),
	}),
});

const policy = defineCollection({

	loader: glob({ base: './src/content/policy', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () => z.object({
		name: z.string(),
		slug: z.string()
	}),
});
const terms = defineCollection({

	loader: glob({ base: './src/content/policy', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () => z.object({
		name: z.string(),
		slug: z.string()
	}),
});
export const collections = { clients, testimonials, industries, benefits, services, blogs, casestudies, teams, jobs, policy,terms };

