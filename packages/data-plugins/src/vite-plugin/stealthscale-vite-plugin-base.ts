import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stealthscale/vite-plugin-base',
  description: 'What every stealth bundler plugin is written with: a typed plugin, the packages a build reached, and the files it writes.',
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
  source: {
    github: 'stealth-scale/config',
    npm: '@stealthscale/vite-plugin-base',
  },
  links: {
    github: 'https://github.com/stealth-scale/config',
    npm: 'https://www.npmjs.com/package/@stealthscale/vite-plugin-base',
    website: 'https://github.com/stealth-scale/config/tree/main/packages/vite-plugin-base#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
