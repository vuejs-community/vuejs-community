import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-merge',
  description: 'Vite plugin which merges multiple input directories into the output directory.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NixySoftware/vite-plugin-merge',
    npm: 'https://www.npmjs.com/package/vite-plugin-merge',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 1,
    },
  },
})
