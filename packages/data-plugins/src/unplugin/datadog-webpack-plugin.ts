import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@datadog/webpack-plugin',
  description: 'Datadog Webpack Plugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'datadog',
    'webpack',
    'bundler',
    'plugin',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/DataDog/build-plugins',
    npm: 'https://www.npmjs.com/package/@datadog/webpack-plugin',
    website: 'https://github.com/DataDog/build-plugins#readme',
  },
  source: {
    github: 'DataDog/build-plugins',
    npm: '@datadog/webpack-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 300843,
      weekly: 47807,
    },
  },
})
