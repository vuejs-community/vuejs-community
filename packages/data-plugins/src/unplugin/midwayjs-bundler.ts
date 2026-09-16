import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@midwayjs/bundler',
  description: 'Midway Hooks bundler plugin for Webpack & Vite',
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
  source: {
    github: 'midwayjs/hooks',
    npm: '@midwayjs/bundler',
  },
  links: {
    github: 'https://github.com/midwayjs/hooks',
    npm: 'https://www.npmjs.com/package/@midwayjs/bundler',
    website: 'https://github.com/midwayjs/hooks',
  },
  stats: {
    stars: 686,
    downloads: {
      monthly: 124,
      weekly: 65,
    },
  },
})
