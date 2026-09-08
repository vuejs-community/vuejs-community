import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate-html',
  description: 'Generate html file for your Rollup bundle',
  icon: 'logos:rollupjs',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'generate',
    'html',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'vladshcherbin/rollup-plugin-generate-html',
    npm: 'rollup-plugin-generate-html',
  },
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-generate-html',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate-html',
  },
  stats: {
    downloads: {
      monthly: 263,
      weekly: 104,
    },
  },
})
