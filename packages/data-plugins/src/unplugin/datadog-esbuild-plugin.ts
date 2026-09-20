import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@datadog/esbuild-plugin',
  description: 'Datadog ESBuild Plugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'datadog',
    'esbuild',
    'bundler',
    'plugin',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/DataDog/build-plugins',
    npm: 'https://www.npmjs.com/package/@datadog/esbuild-plugin',
    website: 'https://github.com/DataDog/build-plugins#readme',
  },
  source: {
    github: 'DataDog/build-plugins',
    npm: '@datadog/esbuild-plugin',
  },
  stats: {
    stars: 110,
    downloads: {
      monthly: 12861,
      weekly: 2171,
    },
  },
})
