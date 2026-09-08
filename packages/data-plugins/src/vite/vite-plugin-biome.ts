import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-biome',
  description: 'Run Biome in the Vite dev loop for fast linting, formatting, and checks.',
  icon: 'logos:vite-icon',
  version: '1.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'skrulling/vite-plugin-biome',
    npm: 'vite-plugin-biome',
  },
  links: {
    github: 'https://github.com/skrulling/vite-plugin-biome',
    npm: 'https://www.npmjs.com/package/vite-plugin-biome',
  },
  stats: {
    downloads: {
      monthly: 27073,
      weekly: 6089,
    },
  },
})
