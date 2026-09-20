import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dependency-guard',
  description: 'Vite plugin that checks dependencies for supply-chain and maintenance risks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'security',
    'supply-chain',
    'dependency',
  ],
  links: {
    github: 'https://github.com/JonathanSchndr/vite-plugin-dependency-guard',
    npm: 'https://www.npmjs.com/package/vite-plugin-dependency-guard',
    website: 'https://github.com/JonathanSchndr/vite-plugin-dependency-guard#readme',
  },
  source: {
    github: 'JonathanSchndr/vite-plugin-dependency-guard',
    npm: 'vite-plugin-dependency-guard',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 48,
      weekly: 6,
    },
  },
})
