import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ethereal-nexus/vite-plugin-ethereal-nexus',
  description: '',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'diconium/ethereal-nexus',
    npm: '@ethereal-nexus/vite-plugin-ethereal-nexus',
  },
  links: {
    github: 'https://github.com/diconium/ethereal-nexus',
    npm: 'https://www.npmjs.com/package/@ethereal-nexus/vite-plugin-ethereal-nexus',
    website: 'https://github.com/diconium/ethereal-nexus#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 103,
      weekly: 18,
    },
  },
})
