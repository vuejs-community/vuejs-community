import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@parischap/rolldown-plugin-pure',
  description: 'Rollup/rolldown/tsdown/vite plugin that adds @__PURE__ annotations. Compatible with the minify bundling option.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
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
  links: {
    github: 'https://github.com/parischap/rolldown-plugin-pure',
    npm: 'https://www.npmjs.com/package/@parischap/rolldown-plugin-pure',
    website: 'https://github.com/parischap/rolldown-plugin-pure',
  },
  source: {
    github: 'parischap/rolldown-plugin-pure',
    npm: '@parischap/rolldown-plugin-pure',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 1,
    },
  },
})
