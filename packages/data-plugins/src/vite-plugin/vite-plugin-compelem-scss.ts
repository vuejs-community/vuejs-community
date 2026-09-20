import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compelem-scss',
  description: 'Vite plugin that compiles SCSS inside compelem css`` tagged templates at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/holyhigh2/compelem-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-compelem-scss',
    website: 'https://github.com/holyhigh2/compelem-extension#readme',
  },
  source: {
    github: 'holyhigh2/compelem-extension',
    npm: 'vite-plugin-compelem-scss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 13,
    },
  },
})
