import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nano_kit/svelte-ssr',
  description: 'The Svelte adapter for server-side rendering in Nano Kit.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'router',
    'routing',
    'navigation',
    'vite',
    'vite-plugin',
    'ssr',
    'nano_kit',
    'svelte',
  ],
  source: {
    github: 'TrigenSoftware/nano_kit',
    npm: '@nano_kit/svelte-ssr',
  },
  links: {
    github: 'https://github.com/TrigenSoftware/nano_kit',
    npm: 'https://www.npmjs.com/package/@nano_kit/svelte-ssr',
    website: 'https://nano-kit.js.org/integrations/svelte-ssr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 429,
      weekly: 247,
    },
  },
})
