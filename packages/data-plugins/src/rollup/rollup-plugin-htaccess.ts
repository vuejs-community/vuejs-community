import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-htaccess',
  description: 'A rolldown/rollup/vite plugin to generate .htaccess files',
  icon: 'logos:rollupjs',
  version: '0.13.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'htaccess',
    'apache',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'marekdedic/rollup-plugin-htaccess',
    npm: 'rollup-plugin-htaccess',
  },
  links: {
    github: 'https://github.com/marekdedic/rollup-plugin-htaccess',
    npm: 'https://www.npmjs.com/package/rollup-plugin-htaccess',
  },
  stats: {
    downloads: {
      monthly: 124,
      weekly: 16,
    },
  },
})
