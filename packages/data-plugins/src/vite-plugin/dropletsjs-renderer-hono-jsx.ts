import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dropletsjs/renderer-hono-jsx',
  description: 'Hono JSX renderer for Droplets: +droplet.tsx and +error.tsx components with hono/jsx, rendered on the server and in the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'droplets',
    'hono',
    'jsx',
    'renderer',
    'micro-frontends',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dropletsjs/droplets',
    npm: 'https://www.npmjs.com/package/@dropletsjs/renderer-hono-jsx',
    website: 'https://dropletsjs.dev',
  },
  source: {
    github: 'dropletsjs/droplets',
    npm: '@dropletsjs/renderer-hono-jsx',
  },
})
