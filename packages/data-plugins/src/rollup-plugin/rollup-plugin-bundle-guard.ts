import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bundle-guard',
  description: 'A rollup plugin that makes sure you don\'t accidentally import something statically, which could have an effect on your bundle size.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'import',
    'guard',
    'static-import',
    'dynamic-import',
  ],
  links: {
    github: 'https://github.com/tjenkinson/rollup-plugin-bundle-guard',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bundle-guard',
    website: 'https://github.com/tjenkinson/rollup-plugin-bundle-guard#readme',
  },
  source: {
    github: 'tjenkinson/rollup-plugin-bundle-guard',
    npm: 'rollup-plugin-bundle-guard',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 65,
      weekly: 24,
    },
  },
})
