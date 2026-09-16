import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hook-use',
  description: 'Displays the sequence and frequency of vite calling its hook functions.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-hook-use',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-hook-use',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-hook-use',
    website: 'https://fengxinming.github.io/vite-plugins/plugins/vite-plugin-hook-use/quick-start',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 390,
      weekly: 24,
    },
  },
})
