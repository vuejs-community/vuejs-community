import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@datadog/vite-plugin',
  description: 'Datadog Vite Plugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'datadog',
    'vite',
    'bundler',
    'plugin',
    'unplugin',
  ],
  source: {
    github: 'DataDog/build-plugins',
    npm: '@datadog/vite-plugin',
  },
  links: {
    github: 'https://github.com/DataDog/build-plugins',
    npm: 'https://www.npmjs.com/package/@datadog/vite-plugin',
    website: 'https://github.com/DataDog/build-plugins#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 538390,
      weekly: 96601,
    },
  },
})
