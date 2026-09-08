import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-fonts',
  description: 'Rollup plugin to download http fonts referenced in css files',
  icon: 'logos:rollupjs',
  version: '1.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mgreminger/rollup-plugin-bundle-fonts',
    npm: 'rollup-plugin-bundle-fonts',
  },
  links: {
    github: 'https://github.com/mgreminger/rollup-plugin-bundle-fonts',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-fonts',
  },
  stats: {
    downloads: {
      monthly: 422,
      weekly: 79,
    },
  },
})
