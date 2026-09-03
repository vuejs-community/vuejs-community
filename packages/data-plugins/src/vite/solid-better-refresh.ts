import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'solid-better-refresh',
  description: 'State-preserving HMR for SolidJS — persist createSignal and createStore across hot module replacements',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'solid',
    'solidjs',
    'hmr',
    'hot-module-replacement',
    'vite',
    'vite-plugin',
    'babel-plugin',
    'developer-experience',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/solid-better-refresh',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
