import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compelem-css',
  description: 'Vite plugin that compiles SCSS/CSS into a compelem CssTemplate via the ?tmpl query.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'holyhigh2/compelem-extension',
    npm: 'vite-plugin-compelem-css',
  },
  links: {
    github: 'https://github.com/holyhigh2/compelem-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-compelem-css',
    website: 'https://github.com/holyhigh2/compelem-extension#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
