import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-flexium',
  description: 'Vite plugin for Flexium - JSX transform, HMR, and dev tools integration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'flexium',
    'signals',
    'reactive',
    'jsx',
    'hmr',
  ],
  source: {
    github: 'Wick-Lim/flexium.js',
    npm: 'vite-plugin-flexium',
  },
  links: {
    github: 'https://github.com/Wick-Lim/flexium.js',
    npm: 'https://www.npmjs.com/package/vite-plugin-flexium',
    website: 'https://flexium.junhyuk.im',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 140,
      weekly: 1,
    },
  },
})
