import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dropletsjs/renderer-lit',
  description: 'Lit renderer for Droplets: +droplet.lit.ts and +error.lit.ts web components, rendered with Lit SSR into declarative shadow DOM and hydrated in the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'droplets',
    'lit',
    'web-components',
    'declarative-shadow-dom',
    'renderer',
    'micro-frontends',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dropletsjs/droplets',
    npm: 'https://www.npmjs.com/package/@dropletsjs/renderer-lit',
    website: 'https://dropletsjs.dev',
  },
  source: {
    github: 'dropletsjs/droplets',
    npm: '@dropletsjs/renderer-lit',
  },
})
