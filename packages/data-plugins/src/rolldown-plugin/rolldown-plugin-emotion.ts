import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rolldown/plugin-emotion',
  description: 'Rolldown plugin for Emotion CSS-in-JS',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'css-in-js',
    'emotion',
    'plugin',
    'rolldown',
    'rolldown-plugin',
  ],
  source: {
    github: 'rolldown/plugins',
    npm: '@rolldown/plugin-emotion',
  },
  links: {
    github: 'https://github.com/rolldown/plugins',
    npm: 'https://www.npmjs.com/package/@rolldown/plugin-emotion',
    website: 'https://github.com/rolldown/plugins/tree/main/packages/emotion#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11970,
      weekly: 2855,
    },
  },
})
