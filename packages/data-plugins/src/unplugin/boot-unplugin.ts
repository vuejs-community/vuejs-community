import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'boot-unplugin',
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
    github: 'https://github.com/kirklin/boot-unplugin',
    npm: 'https://www.npmjs.com/package/boot-unplugin',
    website: 'https://github.com/kirklin/boot-unplugin#readme',
  },
  source: {
    github: 'kirklin/boot-unplugin',
    npm: 'boot-unplugin',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
