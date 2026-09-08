import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-script-tag',
  description: 'Rollup plugin for bundling javascript within <script> tags.',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'script tag',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'panoply/rollup-plugin-script-tag',
    npm: 'rollup-plugin-script-tag',
  },
  links: {
    github: 'https://github.com/panoply/rollup-plugin-script-tag',
    npm: 'https://www.npmjs.com/package/rollup-plugin-script-tag',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
