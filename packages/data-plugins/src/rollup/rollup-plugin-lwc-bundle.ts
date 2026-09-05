import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lwc-bundle',
  description: 'Generate a lightning web component JS bundle',
  version: '1.4.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'lightning-web-components',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/stomita/rollup-plugin-lwc-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lwc-bundle',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 7,
    },
  },
})
