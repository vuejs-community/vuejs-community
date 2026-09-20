import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bpmnlint',
  description: 'Convert bpmnlint config files to consumable modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'bpmnlint',
    'browser-pack',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/nikku/rollup-plugin-bpmnlint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bpmnlint',
    website: 'https://github.com/nikku/rollup-plugin-bpmnlint#readme',
  },
  source: {
    github: 'nikku/rollup-plugin-bpmnlint',
    npm: 'rollup-plugin-bpmnlint',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10143,
      weekly: 1918,
    },
  },
})
