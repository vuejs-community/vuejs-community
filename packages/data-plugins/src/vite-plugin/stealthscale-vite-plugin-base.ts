import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stealthscale/vite-plugin-base',
  description: 'Turns a name and one write step into a bundler plugin that reads the module graph.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'plugin',
    'rolldown',
    'rollup',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stealth-scale/config',
    npm: 'https://www.npmjs.com/package/@stealthscale/vite-plugin-base',
    website: 'https://github.com/stealth-scale/config/tree/main/packages/vite-plugin-base#readme',
  },
  source: {
    github: 'stealth-scale/config',
    npm: '@stealthscale/vite-plugin-base',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
