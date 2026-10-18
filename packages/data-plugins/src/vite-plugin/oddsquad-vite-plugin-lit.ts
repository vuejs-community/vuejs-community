import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oddsquad/vite-plugin-lit',
  description: 'True HMR for Lit components, plus CSS helpers and a DevTools panel',
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
