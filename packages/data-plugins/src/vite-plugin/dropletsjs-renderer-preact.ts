import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dropletsjs/renderer-preact',
  description: 'Preact renderer for Droplets: +droplet.tsx and +error.tsx components, rendered on the server and hydrated in the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'droplets',
    'preact',
    'renderer',
    'micro-frontends',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dropletsjs/droplets',
    npm: 'https://www.npmjs.com/package/@dropletsjs/renderer-preact',
    website: 'https://dropletsjs.dev',
  },
  source: {
    github: 'dropletsjs/droplets',
    npm: '@dropletsjs/renderer-preact',
  },
})
