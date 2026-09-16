import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-script-tag',
  description: 'Rollup plugin for bundling javascript within <script> tags.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'script tag',
  ],
  source: {
    github: 'panoply/rollup-plugin-script-tag',
    npm: 'rollup-plugin-script-tag',
  },
  links: {
    github: 'https://github.com/panoply/rollup-plugin-script-tag',
    npm: 'https://www.npmjs.com/package/rollup-plugin-script-tag',
    website: 'https://github.com/panoply/rollup-plugin-script-tag',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
