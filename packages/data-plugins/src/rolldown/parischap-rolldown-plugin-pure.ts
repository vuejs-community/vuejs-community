import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@parischap/rolldown-plugin-pure',
  description: 'Rollup/rolldown/tsdown/vite plugin that adds @__PURE__ annotations. Compatible with the minify bundling option.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'rolldown-plugin',
    'rolldown',
    'rollup',
    'tsdown',
    'plugin',
    'pure',
    'annotation',
    'annotations',
    'side-effects',
    'tree-shaking',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/parischap/rolldown-plugin-pure',
    npm: 'https://www.npmjs.com/package/@parischap/rolldown-plugin-pure',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 8,
    },
  },
})
