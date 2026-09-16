import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nano_kit/preact-ssr',
  description: 'The Preact adapter for server-side rendering in Nano Kit.',
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
    'preact',
  ],
  source: {
    github: 'TrigenSoftware/nano_kit',
    npm: '@nano_kit/preact-ssr',
  },
  links: {
    github: 'https://github.com/TrigenSoftware/nano_kit',
    npm: 'https://www.npmjs.com/package/@nano_kit/preact-ssr',
    website: 'https://nano-kit.js.org/integrations/preact-ssr',
  },
  stats: {
    stars: 42,
    downloads: {
      monthly: 441,
      weekly: 259,
    },
  },
})
