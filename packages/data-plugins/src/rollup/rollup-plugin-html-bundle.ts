import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-html-bundle',
  description: 'Generates a html file from a template that either has the bundle included using a script-tag with src or inlined in a script-tag',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'html',
    'bundle',
    'inline',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rosenbjerg/rollup-plugin-html-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-html-bundle',
  },
  stats: {
    downloads: {
      monthly: 1060,
      weekly: 272,
    },
  },
})
