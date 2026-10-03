import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'htmx-ui-engine',
  description: 'Build htmx sites from Nunjucks pages: file-based routing, Tailwind, dev server with HMR and static builds, on Bun or Node.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'htmx',
    'htmx-ui',
    'nunjucks',
    'static-site',
    'tailwindcss',
    'bun',
    'bun-plugin',
    'vite',
    'vite-plugin',
    'cli',
  ],
  links: {
    github: 'https://github.com/susonwaiba/htmx-ui',
    npm: 'https://www.npmjs.com/package/htmx-ui-engine',
    website: 'https://github.com/susonwaiba/htmx-ui#readme',
  },
  source: {
    github: 'susonwaiba/htmx-ui',
    npm: 'htmx-ui-engine',
  },
})
