import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-treat-umd-as-commonjs',
  description: 'resolve some edge cases when using requireJS/amd  in browser with vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/pakholeung37/vite-plugin-treat-umd-as-commonjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-treat-umd-as-commonjs',
    website: 'https://github.com/pakholeung37/vite-plugin-treat-umd-as-commonjs#readme',
  },
  source: {
    github: 'pakholeung37/vite-plugin-treat-umd-as-commonjs',
    npm: 'vite-plugin-treat-umd-as-commonjs',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 24605,
      weekly: 5777,
    },
  },
})
