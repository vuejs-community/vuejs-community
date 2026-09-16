import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lwc-bundle',
  description: 'Generate a lightning web component JS bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'lightning-web-components',
  ],
  source: {
    github: 'stomita/rollup-plugin-lwc-bundle',
    npm: 'rollup-plugin-lwc-bundle',
  },
  links: {
    github: 'https://github.com/stomita/rollup-plugin-lwc-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lwc-bundle',
    website: 'https://github.com/stomita/rollup-plugin-lwc-bundle',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 3,
    },
  },
})
