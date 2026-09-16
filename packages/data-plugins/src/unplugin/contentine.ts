import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'contentine',
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
  source: {
    github: 'baroshem/contentine',
    npm: 'contentine',
  },
  links: {
    github: 'https://github.com/baroshem/contentine',
    npm: 'https://www.npmjs.com/package/contentine',
    website: 'https://github.com/baroshem/contentine#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
