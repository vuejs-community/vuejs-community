import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-enhance-log',
  description: 'A vite plugin to log filename, log line, log argument name and separator',
  version: '0.6.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/baozouai/vite-plugin-enhance-log',
    npm: 'https://www.npmjs.com/package/vite-plugin-enhance-log',
  },
  stats: {
    downloads: {
      monthly: 685,
      weekly: 103,
    },
  },
})
