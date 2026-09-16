import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-biome',
  description: 'Run Biome in the Vite dev loop for fast linting, formatting, and checks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'biome',
    'biomejs',
    'vite',
    'vite-plugin',
    'linter',
    'linting',
    'formatter',
    'formatting',
    'code-quality',
    'ai-assisted-development',
  ],
  source: {
    github: 'skrulling/vite-plugin-biome',
    npm: 'vite-plugin-biome',
  },
  links: {
    github: 'https://github.com/skrulling/vite-plugin-biome',
    npm: 'https://www.npmjs.com/package/vite-plugin-biome',
    website: 'https://github.com/skrulling/vite-plugin-biome',
  },
  stats: {
    stars: 74,
    downloads: {
      monthly: 21547,
      weekly: 3796,
    },
  },
})
