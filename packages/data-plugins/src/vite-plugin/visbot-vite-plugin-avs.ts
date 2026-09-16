import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@visbot/vite-plugin-avs',
  description: 'A Vite plugin for your AVS presets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'avs',
    'webvs',
    'winamp',
  ],
  source: {
    github: 'visbot/vite-plugin-avs',
    npm: '@visbot/vite-plugin-avs',
  },
  links: {
    github: 'https://github.com/visbot/vite-plugin-avs',
    npm: 'https://www.npmjs.com/package/@visbot/vite-plugin-avs',
    website: 'https://github.com/visbot/vite-plugin-avs#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 9,
    },
  },
})
