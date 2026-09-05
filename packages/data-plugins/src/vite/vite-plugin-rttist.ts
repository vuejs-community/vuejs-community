import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rttist',
  description: 'RTTIST plugin adding support for advanced reflection features to Vite',
  version: '6.0.0',
  category: 'plugin',
  tags: [
    'rttist',
    'plugin',
    'vite',
    'vite-plugin',
    'transformer',
    'reflection',
    'loader',
    'typescript',
    'runtime',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rttist/rttist',
    npm: 'https://www.npmjs.com/package/vite-plugin-rttist',
  },
  stats: {
    downloads: {
      monthly: 62,
      weekly: 22,
    },
  },
})
