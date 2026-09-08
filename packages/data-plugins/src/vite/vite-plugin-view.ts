import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-view',
  description: 'Dynamically render pages using custom template engines instead of the static `index.html` entry file.',
  icon: 'logos:vite-icon',
  version: '8.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-plugin-view',
    'engine',
    'template',
    'view',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-view',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-view',
  },
  stats: {
    downloads: {
      monthly: 818,
      weekly: 392,
    },
  },
})
