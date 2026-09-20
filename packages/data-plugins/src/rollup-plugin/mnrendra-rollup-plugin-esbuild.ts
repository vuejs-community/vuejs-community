import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mnrendra/rollup-plugin-esbuild',
  description: 'A "rollup-plugin-esbuild" with dual exports, allowing consumers to `import` or `require` it without needing to access the `.default` export in both CommonJS and ES Module formats.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin-esbuild',
    'rollup-plugin',
    'rollup',
    'plugin',
    'esbuild',
  ],
  links: {
    github: 'https://github.com/mnrendra/rollup-plugin-esbuild',
    npm: 'https://www.npmjs.com/package/@mnrendra/rollup-plugin-esbuild',
    website: 'https://github.com/mnrendra/rollup-plugin-esbuild#readme',
  },
  source: {
    github: 'mnrendra/rollup-plugin-esbuild',
    npm: '@mnrendra/rollup-plugin-esbuild',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 36,
      weekly: 17,
    },
  },
})
