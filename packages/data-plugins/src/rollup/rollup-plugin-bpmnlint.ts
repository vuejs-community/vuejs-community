import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bpmnlint',
  description: 'Convert bpmnlint config files to consumable modules',
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
  links: {
    github: 'https://github.com/nikku/rollup-plugin-bpmnlint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bpmnlint',
  },
  stats: {
    downloads: {
      monthly: 11009,
      weekly: 3311,
    },
  },
})
