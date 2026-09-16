import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-inspector',
  description: 'Jump to the local IDE source code while clicking the element of the browser automatically.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-inspector',
  ],
  source: {
    github: 'vite-inspector/vite-inspector',
    npm: 'vite-inspector',
  },
  links: {
    github: 'https://github.com/vite-inspector/vite-inspector',
    npm: 'https://www.npmjs.com/package/vite-inspector',
    website: 'https://github.com/vite-inspector/vite-inspector#readme',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
