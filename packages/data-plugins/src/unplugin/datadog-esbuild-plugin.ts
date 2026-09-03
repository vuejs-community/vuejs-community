import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@datadog/esbuild-plugin',
  description: 'Datadog ESBuild Plugin',
  version: '3.2.12',
  category: 'plugin',
  tags: [
    'datadog',
    'esbuild',
    'bundler',
    'plugin',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/DataDog/build-plugins',
    npm: 'https://www.npmjs.com/package/@datadog/esbuild-plugin',
  },
  stats: {
    downloads: {
      monthly: 13130,
      weekly: 3512,
    },
  },
})
