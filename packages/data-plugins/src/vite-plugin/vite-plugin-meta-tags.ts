import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-meta-tags',
  description: 'A Vite plug-in to automatically inject meta tags into your index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'meta-tags',
    'meta',
  ],
  source: {
    github: 'byr0n3/vite-plugin-meta-tags',
    npm: 'vite-plugin-meta-tags',
  },
  links: {
    github: 'https://github.com/byr0n3/vite-plugin-meta-tags',
    npm: 'https://www.npmjs.com/package/vite-plugin-meta-tags',
    website: 'https://github.com/byr0n3/vite-plugin-meta-tags#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 3047,
      weekly: 490,
    },
  },
})
