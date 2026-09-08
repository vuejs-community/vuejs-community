import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dmnlint',
  description: 'Convert dmnlint config files to consumable modules',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'bpmn-io/rollup-plugin-dmnlint',
    npm: 'rollup-plugin-dmnlint',
  },
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
