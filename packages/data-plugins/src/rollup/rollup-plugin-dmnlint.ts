import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dmnlint',
  description: 'Convert dmnlint config files to consumable modules',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'dmnlint',
    'browser-pack',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/bpmn-io/rollup-plugin-dmnlint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dmnlint',
  },
  stats: {
    downloads: {
      monthly: 211,
      weekly: 30,
    },
  },
})
