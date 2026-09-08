import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-encoding',
  description: 'Convert file encoding, build on top of encoding package',
  icon: 'logos:rollupjs',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'rollup',
    'encoding',
    'charset',
    'plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'sly-x86/rollup-plugin-encoding',
    npm: 'rollup-plugin-encoding',
  },
  links: {
    github: 'https://github.com/sly-x86/rollup-plugin-encoding',
    npm: 'https://www.npmjs.com/package/rollup-plugin-encoding',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 6,
    },
  },
})
