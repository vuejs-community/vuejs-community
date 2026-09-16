import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-beep',
  description: 'A Rollup plugin which beeps on errors and warnings',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'beep',
    'plugin',
    'rollup',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-beep',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-beep',
    website: 'https://github.com/rollup/plugins/tree/master/packages/beep',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5421,
      weekly: 884,
    },
  },
})
