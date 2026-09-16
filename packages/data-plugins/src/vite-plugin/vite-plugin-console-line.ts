import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console-line',
  description: 'Add \'console.log\' file location and line number infomation in the code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'log',
    'vite',
    'console',
    'console.log',
    'vite-plugin',
  ],
  source: {
    github: 'lq9958/vite-plugin-console-line',
    npm: 'vite-plugin-console-line',
  },
  links: {
    github: 'https://github.com/lq9958/vite-plugin-console-line',
    npm: 'https://www.npmjs.com/package/vite-plugin-console-line',
    website: 'https://github.com/lq9958/vite-plugin-console-line#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
