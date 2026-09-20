import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@russmedia/theme-builder-plugin',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/russmediadigital/theme-builder-plugin',
    npm: 'https://www.npmjs.com/package/@russmedia/theme-builder-plugin',
    website: 'https://github.com/russmediadigital/theme-builder-plugin#readme',
  },
  source: {
    github: 'russmediadigital/theme-builder-plugin',
    npm: '@russmedia/theme-builder-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
