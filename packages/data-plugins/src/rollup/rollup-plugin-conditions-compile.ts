import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-conditions-compile',
  description: 'Conditional compilation plugin based on rollup',
  icon: 'logos:rollupjs',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'replace',
    'conditions',
    'compile',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'zlq333/rollup-plugin-conditions-compile',
    npm: 'rollup-plugin-conditions-compile',
  },
  links: {
    github: 'https://github.com/zlq333/rollup-plugin-conditions-compile',
    npm: 'https://www.npmjs.com/package/rollup-plugin-conditions-compile',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
