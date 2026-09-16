import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@glitchybyte/dlog',
  description: 'Console logging for enhancing logs with source filenames and line numbers while removing all logs in production.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'babel-plugin',
    'vite-plugin',
    'console',
    'dev',
    'log',
    'source',
    'line',
  ],
  source: {
    github: 'GlitchyByte/dlog',
    npm: '@glitchybyte/dlog',
  },
  links: {
    github: 'https://github.com/GlitchyByte/dlog',
    npm: 'https://www.npmjs.com/package/@glitchybyte/dlog',
    website: 'https://github.com/GlitchyByte/dlog#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
