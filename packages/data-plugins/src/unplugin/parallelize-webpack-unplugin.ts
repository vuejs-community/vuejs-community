import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'parallelize-webpack-unplugin',
  description: 'Use unplugin with thread-loader in webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'thread-loader',
    'unplugin',
    'webpack',
  ],
  links: {
    github: 'https://github.com/CyanSalt/parallelize-webpack-unplugin',
    npm: 'https://www.npmjs.com/package/parallelize-webpack-unplugin',
    website: 'https://github.com/CyanSalt/parallelize-webpack-unplugin#readme',
  },
  source: {
    github: 'CyanSalt/parallelize-webpack-unplugin',
    npm: 'parallelize-webpack-unplugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
