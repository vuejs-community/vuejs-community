import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rolldown/plugin-node-polyfills',
  description: 'node polyfills for Rolldown',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'rolldown',
    'rolldown-plugin',
  ],
  source: {
    github: 'rolldown/rolldown-plugin-node-polyfills',
    npm: '@rolldown/plugin-node-polyfills',
  },
  links: {
    github: 'https://github.com/rolldown/rolldown-plugin-node-polyfills',
    npm: 'https://www.npmjs.com/package/@rolldown/plugin-node-polyfills',
    website: 'https://github.com/rolldown/rolldown-plugin-node-polyfills#readme',
  },
  stats: {
    stars: 35,
    downloads: {
      monthly: 107999,
      weekly: 25202,
    },
  },
})
