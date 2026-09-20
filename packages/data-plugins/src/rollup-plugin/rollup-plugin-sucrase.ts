import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-sucrase',
  description: 'Compile TypeScript, Flow, JSX, etc with Sucrase',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'sucrase',
    'typescript',
    'flow',
    'jsx',
  ],
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-sucrase',
    website: 'https://github.com/rollup/plugins/tree/master/packages/sucrase/#readme',
  },
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-sucrase',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 360274,
      weekly: 61697,
    },
  },
})
