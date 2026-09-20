import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-html-bundle',
  description: 'Generates a html file from a template that either has the bundle included using a script-tag with src or inlined in a script-tag',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'html',
    'bundle',
    'inline',
  ],
  links: {
    github: 'https://github.com/rosenbjerg/rollup-plugin-html-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-html-bundle',
    website: 'https://github.com/rosenbjerg/rollup-plugin-html-bundle',
  },
  source: {
    github: 'rosenbjerg/rollup-plugin-html-bundle',
    npm: 'rollup-plugin-html-bundle',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 923,
      weekly: 145,
    },
  },
})
