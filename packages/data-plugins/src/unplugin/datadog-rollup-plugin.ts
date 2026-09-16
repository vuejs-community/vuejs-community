import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@datadog/rollup-plugin',
  description: 'Datadog Rollup Plugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'datadog',
    'rollup',
    'bundler',
    'plugin',
    'unplugin',
  ],
  source: {
    github: 'DataDog/build-plugins',
    npm: '@datadog/rollup-plugin',
  },
  links: {
    github: 'https://github.com/DataDog/build-plugins',
    npm: 'https://www.npmjs.com/package/@datadog/rollup-plugin',
    website: 'https://github.com/DataDog/build-plugins#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2051,
      weekly: 705,
    },
  },
})
