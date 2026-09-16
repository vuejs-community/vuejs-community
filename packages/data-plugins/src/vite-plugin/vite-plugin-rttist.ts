import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rttist',
  description: 'RTTIST plugin adding support for advanced reflection features to Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'rttist/rttist',
    npm: 'vite-plugin-rttist',
  },
  links: {
    github: 'https://github.com/rttist/rttist',
    npm: 'https://www.npmjs.com/package/vite-plugin-rttist',
    website: 'https://rttist.org',
  },
  stats: {
    stars: 34,
    downloads: {
      monthly: 58,
      weekly: 2,
    },
  },
})
