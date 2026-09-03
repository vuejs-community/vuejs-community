import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@glitchybyte/dlog',
  description: 'Console logging for enhancing logs with source filenames and line numbers while removing all logs in production.',
  version: '2.1.1',
  category: 'plugin',
  tags: [
    'babel-plugin',
    'vite-plugin',
    'console',
    'dev',
    'log',
    'source',
    'line',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/GlitchyByte/dlog',
    npm: 'https://www.npmjs.com/package/@glitchybyte/dlog',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 7,
    },
  },
})
