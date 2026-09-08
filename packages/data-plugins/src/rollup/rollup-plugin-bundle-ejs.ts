import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-ejs',
  description: 'create html with the bundle file',
  icon: 'logos:rollupjs',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'ejs',
    'bundle-ejs',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'dushaobindoudou/rollup-plugin-bundle-ejs',
    npm: 'rollup-plugin-bundle-ejs',
  },
  links: {
    github: 'https://github.com/dushaobindoudou/rollup-plugin-bundle-ejs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-ejs',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 2,
    },
  },
})
