import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dmnlint',
  description: 'Convert dmnlint config files to consumable modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'dmnlint',
    'browser-pack',
    'rollup-plugin',
  ],
  source: {
    github: 'bpmn-io/rollup-plugin-dmnlint',
    npm: 'rollup-plugin-dmnlint',
  },
  links: {
    github: 'https://github.com/bpmn-io/rollup-plugin-dmnlint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dmnlint',
    website: 'https://github.com/bpmn-io/rollup-plugin-dmnlint#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 174,
      weekly: 3,
    },
  },
})
