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
		siteImage: image(),
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


const events = defineCollection({
	loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		events: z.array(
		  z.object({
			title: z.string(),
			image: image(),
			date: z.coerce.date(),
			quote: z.string(),
		  })
		),
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
		category: z.string(),
		title: z.string(),
		image: image(),
		saveCost:z.string(),
		description: z.string(),
		tags: z.array(z.string()),
	}),
});

const teams = defineCollection({
	loader: glob({ base: './src/content/teams', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		teams: z.array(
		  z.object({
			name: z.string(),
			image: image(),
			designation: z.string().optional(),
			linkedin: z.string().optional(),
			desc: z.string(),
		  })
		),
	}),
});
const corefeatures = defineCollection({
	loader: glob({ base: './src/content/corefeatures', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		slug: z.string(),
		image: image(),
		description: z.string()
	}),
});

const approaches = defineCollection({
	loader: glob({ base: './src/content/approaches', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		approaches: z.array(
		  z.object({
			title: z.string(),
			description: z.string(),
			image: image()
		  })
		),
	}),
});
export const collections = { approaches, corefeatures, clients, testimonials, casestudies, industries, services, teams,blogs,events };

