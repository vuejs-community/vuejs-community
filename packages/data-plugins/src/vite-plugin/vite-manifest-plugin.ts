import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-manifest-plugin',
  description: 'This vite plugin will add publich path or url to the vite generated manifest',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite plugin',
    'module federation',
  ],
  links: {
    github: 'https://github.com/ThanatWongsamut/vite-manifest-plugin',
    npm: 'https://www.npmjs.com/package/vite-manifest-plugin',
    website: 'https://github.com/ThanatWongsamut/vite-manifest-plugin#readme',
  },
  source: {
    github: 'ThanatWongsamut/vite-manifest-plugin',
    npm: 'vite-manifest-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9292,
      weekly: 1382,
    },
  },
})
