import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@editor-x/rollup-plugin-userscript',
  description: 'A Rollup plugin for defining userscript metadata blocks, suitable for use with Tampermonkey, Violentmonkey, and other userscript managers.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'userscript',
    'tampermonkey',
    'violentmonkey',
  ],
  links: {
    github: 'https://github.com/TheEditorX/rollup-plugin-userscript',
    npm: 'https://www.npmjs.com/package/@editor-x/rollup-plugin-userscript',
    website: 'https://github.com/TheEditorX/rollup-plugin-userscript#readme',
  },
  source: {
    github: 'TheEditorX/rollup-plugin-userscript',
    npm: '@editor-x/rollup-plugin-userscript',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
