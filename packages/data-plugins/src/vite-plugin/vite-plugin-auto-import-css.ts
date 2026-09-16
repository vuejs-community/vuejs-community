import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-import-css',
  description: 'Used to resolve that css modules loaded in vite react projects must write style references in the tag attribute className',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'yaooooooooo/vite-plugin-transform-classname',
    npm: 'vite-plugin-auto-import-css',
  },
  links: {
    github: 'https://github.com/yaooooooooo/vite-plugin-transform-classname',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-import-css',
    website: 'https://github.com/yaooooooooo/vite-plugin-transform-classname#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
