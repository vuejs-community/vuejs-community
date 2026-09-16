import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-njk-trace',
  description: 'Dev-only Vite plugin that wraps every Nunjucks template (and rendered page) with HTML comments so you can see template origins in DevTools.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'vinyardrip/vite-njk-trace',
    npm: 'vite-njk-trace',
  },
  links: {
    github: 'https://github.com/vinyardrip/vite-njk-trace',
    npm: 'https://www.npmjs.com/package/vite-njk-trace',
    website: 'https://github.com/vinyardrip/vite-njk-trace#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 349,
      weekly: 5,
    },
  },
})
