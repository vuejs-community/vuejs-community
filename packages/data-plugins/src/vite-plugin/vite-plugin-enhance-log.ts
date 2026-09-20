import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-enhance-log',
  description: 'A vite plugin to log filename, log line, log argument name and separator',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'enhance log',
    'vite-plugin',
    'add log argument name',
    'Add the file name of the log file',
    'Add the line of the log',
    'add separator for every argument',
  ],
  links: {
    github: 'https://github.com/baozouai/vite-plugin-enhance-log',
    npm: 'https://www.npmjs.com/package/vite-plugin-enhance-log',
    website: 'https://github.com/baozouai/vite-plugin-enhance-log',
  },
  source: {
    github: 'baozouai/vite-plugin-enhance-log',
    npm: 'vite-plugin-enhance-log',
  },
  stats: {
    stars: 31,
    downloads: {
      monthly: 596,
      weekly: 51,
    },
  },
})
