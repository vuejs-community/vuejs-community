import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-treat-umd-as-commonjs',
  description: 'resolve some edge cases when using requireJS/amd  in browser with vite',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'commonjs',
    'cjs',
    'umd',
    'requirejs',
    'require-js',
    'amd',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pakholeung37/vite-plugin-treat-umd-as-commonjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-treat-umd-as-commonjs',
  },
  stats: {
    downloads: {
      monthly: 27370,
      weekly: 7263,
    },
  },
})
