import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compelem-scss',
  description: 'Vite plugin that compiles SCSS inside compelem css`` tagged templates at build time.',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'compelem',
    'scss',
    'sass',
    'css',
    'web-components',
    'shadow-dom',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'holyhigh2/compelem-extension',
    npm: 'vite-plugin-compelem-scss',
  },
  links: {
    github: 'https://github.com/holyhigh2/compelem-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-compelem-scss',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
