import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dropletsjs/droplets',
  description: 'Micro-frontends on Hono, as a Vite plugin: per-droplet SSR, selective hydration, independent bundles, embeddable from any stack, with pluggable renderers (Svelte, Vue, React, Preact, Solid, Hono JSX, Handlebars, Lit).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hono',
    'vite-plugin',
    'micro-frontends',
    'ssr',
    'islands',
    'web-components',
    'svelte',
    'vue',
    'solid',
    'react',
  ],
  links: {
    github: 'https://github.com/dropletsjs/droplets',
    npm: 'https://www.npmjs.com/package/@dropletsjs/droplets',
    website: 'https://dropletsjs.dev',
  },
  source: {
    github: 'dropletsjs/droplets',
    npm: '@dropletsjs/droplets',
  },
})
