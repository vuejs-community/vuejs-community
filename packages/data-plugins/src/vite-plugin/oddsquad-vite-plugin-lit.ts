import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oddsquad/vite-plugin-lit',
  description: 'Lit for Vite and Astro: true HMR, server rendering and a DevTools panel',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'lit',
    'hmr',
    'web-components',
    'devtools',
    'withastro',
    'renderer',
  ],
  links: {
    github: 'https://github.com/oddcelot/lit-devtools',
    npm: 'https://www.npmjs.com/package/@oddsquad/vite-plugin-lit',
    website: 'https://lit-devtools.oddsquad.dev/',
  },
  source: {
    github: 'oddcelot/lit-devtools',
    npm: '@oddsquad/vite-plugin-lit',
  },
})
