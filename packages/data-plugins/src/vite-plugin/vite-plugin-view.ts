import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-view',
  description: 'Dynamically render pages using custom template engines instead of the static `index.html` entry file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-view',
    'engine',
    'template',
    'view',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-view',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-view',
    website: 'https://fengxinming.github.io/vite-plugins/plugins/vite-plugin-view/quick-start',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 858,
      weekly: 15,
    },
  },
})
