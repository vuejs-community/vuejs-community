import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-swc',
  description: 'Transpile JavaScript/TypeScript code with swc.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'swc',
    'speedy-web-compiler',
    'npm',
    'modules',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-swc',
    website: 'https://github.com/rollup/plugins/tree/master/packages/swc#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-swc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2137515,
      weekly: 382246,
    },
  },
})
