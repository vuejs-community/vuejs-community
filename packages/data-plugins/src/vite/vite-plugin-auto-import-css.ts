import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-import-css',
  description: 'Used to resolve that css modules loaded in vite react projects must write style references in the tag attribute className',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vitejs',
    'vite plugin',
    'vite-plugin',
    'jsx',
    'react',
    'postcss',
    'css',
    'css-modules',
    'css modules',
    'import css',
    'scss',
    'sass',
    'less',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'yaooooooooo/vite-plugin-transform-classname',
    npm: 'vite-plugin-auto-import-css',
  },
  links: {
    github: 'https://github.com/yaooooooooo/vite-plugin-transform-classname',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-import-css',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
