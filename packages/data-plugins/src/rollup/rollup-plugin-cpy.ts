import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cpy',
  description: 'Rollup plugin to easily copy files and folders',
  icon: 'logos:rollupjs',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'rollup copy',
    'rollup plugin copy',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'paulmelnikow/rollup-plugin-cpy',
    npm: 'rollup-plugin-cpy',
  },
  links: {
    github: 'https://github.com/paulmelnikow/rollup-plugin-cpy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cpy',
  },
  stats: {
    downloads: {
      monthly: 16191,
      weekly: 3724,
    },
  },
})
