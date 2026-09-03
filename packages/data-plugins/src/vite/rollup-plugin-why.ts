import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-why',
  description: 'Explains why a module ended up in your Rollup or Vite bundle: shortest import chains, side-effect-retained code, and per-package size attribution.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'tree-shaking',
    'treeshake',
    'bundle-size',
    'bundle-analysis',
    'side-effects',
    'module-graph',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/abdalkadir/rollup-plugin-why',
    npm: 'https://www.npmjs.com/package/rollup-plugin-why',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
