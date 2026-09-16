import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-image',
  description: 'A universal bundler plugin which imports JPG, PNG, GIF, SVG, and WebP files.',
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
  source: {
    github: 'wzc520pyfm/unplugin-image',
    npm: 'unplugin-image',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-image',
    npm: 'https://www.npmjs.com/package/unplugin-image',
    website: 'https://github.com/wzc520pyfm/unplugin-image#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 7160,
      weekly: 1806,
    },
  },
})
