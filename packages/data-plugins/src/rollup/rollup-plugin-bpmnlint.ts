import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bpmnlint',
  description: 'Convert bpmnlint config files to consumable modules',
  icon: 'logos:rollupjs',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'bpmnlint',
    'browser-pack',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'nikku/rollup-plugin-bpmnlint',
    npm: 'rollup-plugin-bpmnlint',
  },
  links: {
    github: 'https://github.com/nikku/rollup-plugin-bpmnlint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bpmnlint',
  },
  stats: {
    downloads: {
      monthly: 10405,
      weekly: 1714,
    },
  },
})
