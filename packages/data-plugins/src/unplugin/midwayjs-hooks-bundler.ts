import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@midwayjs/hooks-bundler',
  description: 'Bundler plugin for @midwayjs/hooks',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'midway',
    'fullstack',
    'bundler',
    'unplugin',
    'vite',
    'webpack',
  ],
  links: {
    github: 'https://github.com/midwayjs/hooks',
    npm: 'https://www.npmjs.com/package/@midwayjs/hooks-bundler',
    website: 'https://github.com/midwayjs/hooks',
  },
  source: {
    github: 'midwayjs/hooks',
    npm: '@midwayjs/hooks-bundler',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 114,
      weekly: 66,
    },
  },
})
