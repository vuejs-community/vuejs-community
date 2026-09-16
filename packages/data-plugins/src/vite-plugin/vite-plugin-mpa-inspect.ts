import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mpa-inspect',
  description: 'Inspect the mpa entries of Vite plugins',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'antfu/vite-plugin-mpa-inspect',
    npm: 'vite-plugin-mpa-inspect',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-mpa-inspect',
    npm: 'https://www.npmjs.com/package/vite-plugin-mpa-inspect',
    website: 'https://github.com/gweesin/vite-plugin-mpa-inspect#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
