import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xhtml2shadow',
  description: 'Converts .xhtml files into JavaScript code that produces a shadow root with that HTML.',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'p-jack/dubc',
    npm: 'vite-plugin-xhtml2shadow',
  },
  links: {
    github: 'https://github.com/p-jack/dubc',
    npm: 'https://www.npmjs.com/package/vite-plugin-xhtml2shadow',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
