import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svg-sprite-deterministic',
  description: 'Create deterministic external svg sprite from your bundle using Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'svg',
    'sprite',
    'svg-sprite',
    'svgo',
    'create',
    'generate',
    'extract',
    'minify',
  ],
  links: {
    github: 'https://github.com/mhassan1/rollup-plugin-svg-sprite',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svg-sprite-deterministic',
    website: 'https://github.com/mhassan1/rollup-plugin-svg-sprite#readme',
  },
  source: {
    github: 'mhassan1/rollup-plugin-svg-sprite',
    npm: 'rollup-plugin-svg-sprite-deterministic',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 272,
      weekly: 70,
    },
  },
})
