import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ij2tpl',
  description: 'A simple IJ2TPL loader for rollupjs',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'ij2tpl',
    'rollup-plugin',
    'loader',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'urain39/rollup-plugin-ij2tpl',
    npm: 'rollup-plugin-ij2tpl',
  },
  links: {
    github: 'https://github.com/urain39/rollup-plugin-ij2tpl',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ij2tpl',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
