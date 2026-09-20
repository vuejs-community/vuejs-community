import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stylex-extend/vite',
  description: 'Experimental vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'stylex',
    'experimental',
    'css-in-js',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nonzzz/stylex-extend',
    npm: 'https://www.npmjs.com/package/@stylex-extend/vite',
    website: 'https://github.com/nonzzz/stylex-extend#readme',
  },
  source: {
    github: 'nonzzz/stylex-extend',
    npm: '@stylex-extend/vite',
  },
  stats: {
    stars: 29,
    downloads: {
      monthly: 1703,
      weekly: 397,
    },
  },
})
