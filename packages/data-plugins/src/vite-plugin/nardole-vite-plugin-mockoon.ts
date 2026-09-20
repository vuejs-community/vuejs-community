import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nardole/vite-plugin-mockoon',
  description: 'Run Mockoon with your Vite dev server using a tiny plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mockoon',
    'vite',
    'vite-plugin',
    'api',
    'mock',
    'mock-server',
  ],
  links: {
    github: 'https://github.com/btmluiz/vite-plugin-mockoon',
    npm: 'https://www.npmjs.com/package/@nardole/vite-plugin-mockoon',
    website: 'https://github.com/btmluiz/vite-plugin-mockoon#readme',
  },
  source: {
    github: 'btmluiz/vite-plugin-mockoon',
    npm: '@nardole/vite-plugin-mockoon',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 261,
      weekly: 80,
    },
  },
})
