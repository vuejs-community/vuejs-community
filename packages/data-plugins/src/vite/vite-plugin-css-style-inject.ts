import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-style-inject',
  description: 'A Vite plugin designed to inject CSS directly into JavaScript files, preventing the generation of separate CSS files. This is particularly useful for packaging libraries with minimal styles, ensuring users don’t need to import an additional CSS file manua',
  icon: 'logos:vite-icon',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'typescript',
    'css-style-inject',
    'single-js-file',
    'css',
    'js',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kurnia-dev/vite-plugin-css-style-inject',
    npm: 'vite-plugin-css-style-inject',
  },
  links: {
    github: 'https://github.com/kurnia-dev/vite-plugin-css-style-inject',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-style-inject',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 10,
    },
  },
})
