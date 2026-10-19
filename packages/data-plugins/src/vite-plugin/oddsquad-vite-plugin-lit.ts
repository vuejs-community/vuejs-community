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
    github: 'https://github.com/oddcelot/vite-plugin-lit',
    npm: 'https://www.npmjs.com/package/@oddsquad/vite-plugin-lit',
    website: 'https://oddcelot.github.io/vite-plugin-lit/',
  },
  source: {
    github: 'oddcelot/vite-plugin-lit',
    npm: '@oddsquad/vite-plugin-lit',
  },
})
