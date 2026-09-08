import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dependency-guard',
  description: 'Vite plugin that checks dependencies for supply-chain and maintenance risks.',
  icon: 'logos:vite-icon',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'security',
    'supply-chain',
    'dependency',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'JonathanSchndr/vite-plugin-dependency-guard',
    npm: 'vite-plugin-dependency-guard',
  },
  links: {
    github: 'https://github.com/JonathanSchndr/vite-plugin-dependency-guard',
    npm: 'https://www.npmjs.com/package/vite-plugin-dependency-guard',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 1,
    },
  },
})
