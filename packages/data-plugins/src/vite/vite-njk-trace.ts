import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-njk-trace',
  description: 'Dev-only Vite plugin that wraps every Nunjucks template (and rendered page) with HTML comments so you can see template origins in DevTools.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'nunjucks',
    'njk',
    'debug',
    'trace',
    'devtools',
    'templates',
    'ssg',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vinyardrip/vite-njk-trace',
    npm: 'https://www.npmjs.com/package/vite-njk-trace',
  },
  stats: {
    downloads: {
      monthly: 327,
      weekly: 327,
    },
  },
})
