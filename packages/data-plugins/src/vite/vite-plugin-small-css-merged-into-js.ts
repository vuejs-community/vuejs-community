import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-small-css-merged-into-js',
  description: 'Merges css smaller than a specified byte into js',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'small css merge to js',
    'small byte',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/KongYanHHHH/vite-plugin-small-css-merged-into-js',
    npm: 'https://www.npmjs.com/package/vite-plugin-small-css-merged-into-js',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 1,
    },
  },
})
