import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-cp',
  description: 'Simple plugin for copynig files to a new destincation',
  icon: 'logos:rollupjs',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'rollup',
    'copy',
    'plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'sly-x86/rollup-plugin-cp',
    npm: 'rollup-plugin-cp',
  },
  links: {
    github: 'https://github.com/sly-x86/rollup-plugin-cp',
    npm: 'https://www.npmjs.com/package/rollup-plugin-cp',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
