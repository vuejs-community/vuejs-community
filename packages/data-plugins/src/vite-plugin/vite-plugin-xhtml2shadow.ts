import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xhtml2shadow',
  description: 'Converts .xhtml files into JavaScript code that produces a shadow root with that HTML.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'p-jack/dubc',
    npm: 'vite-plugin-xhtml2shadow',
  },
  links: {
    github: 'https://github.com/p-jack/dubc',
    npm: 'https://www.npmjs.com/package/vite-plugin-xhtml2shadow',
    website: 'https://github.com/p-jack/dubc#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
