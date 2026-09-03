import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nardole/vite-plugin-mockoon',
  description: 'Run Mockoon with your Vite dev server using a tiny plugin.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'mockoon',
    'vite',
    'vite-plugin',
    'api',
    'mock',
    'mock-server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/btmluiz/vite-plugin-mockoon',
    npm: 'https://www.npmjs.com/package/@nardole/vite-plugin-mockoon',
  },
  stats: {
    downloads: {
      monthly: 187,
      weekly: 35,
    },
  },
})
