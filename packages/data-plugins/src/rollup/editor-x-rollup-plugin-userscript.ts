import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@editor-x/rollup-plugin-userscript',
  description: 'A Rollup plugin for defining userscript metadata blocks, suitable for use with Tampermonkey, Violentmonkey, and other userscript managers.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'userscript',
    'tampermonkey',
    'violentmonkey',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/TheEditorX/rollup-plugin-userscript',
    npm: 'https://www.npmjs.com/package/@editor-x/rollup-plugin-userscript',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 6,
    },
  },
})
