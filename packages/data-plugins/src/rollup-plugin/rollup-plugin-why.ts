import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-why',
  description: 'Explains why a module ended up in your Rollup or Vite bundle: shortest import chains, side-effect-retained code, and per-package size attribution.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/abdalkadir/rollup-plugin-why',
    npm: 'https://www.npmjs.com/package/rollup-plugin-why',
    website: 'https://github.com/abdalkadir/rollup-plugin-why#readme',
  },
  source: {
    github: 'abdalkadir/rollup-plugin-why',
    npm: 'rollup-plugin-why',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
