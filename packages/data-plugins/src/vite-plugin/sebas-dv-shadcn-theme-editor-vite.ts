import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sebas-dv/shadcn-theme-editor-vite',
  description: 'Vite plugin that mounts the shadcn theme-editor API and injects the live overlay. Covers Vite, Laravel+Inertia, TanStack Start, Astro, Remix, SvelteKit.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'shadcn',
    'shadcn-ui',
    'vite',
    'vite-plugin',
    'theme-editor',
    'tailwind-v4',
    'oklch',
    'laravel-inertia',
    'astro',
    'remix',
  ],
  source: {
    github: 'Sebas-DV/shadcn-theme-editor',
    npm: '@sebas-dv/shadcn-theme-editor-vite',
  },
  links: {
    github: 'https://github.com/Sebas-DV/shadcn-theme-editor',
    npm: 'https://www.npmjs.com/package/@sebas-dv/shadcn-theme-editor-vite',
    website: 'https://github.com/Sebas-DV/shadcn-theme-editor#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 50,
      weekly: 50,
    },
  },
})
