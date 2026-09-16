import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-fonts',
  description: 'Rollup plugin to download http fonts referenced in css files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'mgreminger/rollup-plugin-bundle-fonts',
    npm: 'rollup-plugin-bundle-fonts',
  },
  links: {
    github: 'https://github.com/mgreminger/rollup-plugin-bundle-fonts',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-fonts',
    website: 'https://github.com/mgreminger/rollup-plugin-bundle-fonts',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 532,
      weekly: 219,
    },
  },
})
