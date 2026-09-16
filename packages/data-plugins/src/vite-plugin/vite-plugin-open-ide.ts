import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-open-ide',
  description: 'Jump to the local IDE source code while clicking the element of the browser automatically.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'jump-ide',
  ],
  source: {
    github: 'jump-ide/vite-plugin-open-ide',
    npm: 'vite-plugin-open-ide',
  },
  links: {
    github: 'https://github.com/jump-ide/vite-plugin-open-ide',
    npm: 'https://www.npmjs.com/package/vite-plugin-open-ide',
    website: 'https://github.com/jump-ide/vite-plugin-open-ide#readme',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 51,
      weekly: 4,
    },
  },
})
