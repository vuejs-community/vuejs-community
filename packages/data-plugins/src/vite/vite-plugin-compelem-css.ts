import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compelem-css',
  description: 'Vite plugin that compiles SCSS/CSS into a compelem CssTemplate via the ?tmpl query.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'compelem',
    'css',
    'scss',
    'sass',
    'shadow-dom',
    'web-components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/holyhigh2/compelem-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-compelem-css',
  },
  stats: {
    downloads: {
      monthly: 154,
      weekly: 6,
    },
  },
})
