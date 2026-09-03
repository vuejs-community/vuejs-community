import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@datadog/rollup-plugin',
  description: 'Datadog Rollup Plugin',
  version: '3.2.12',
  category: 'plugin',
  tags: [
    'datadog',
    'rollup',
    'bundler',
    'plugin',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/DataDog/build-plugins',
    npm: 'https://www.npmjs.com/package/@datadog/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 2656,
      weekly: 291,
    },
  },
})
