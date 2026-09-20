import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@datadog/rspack-plugin',
  description: 'Datadog Rspack Plugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'datadog',
    'rspack',
    'bundler',
    'plugin',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/DataDog/build-plugins',
    npm: 'https://www.npmjs.com/package/@datadog/rspack-plugin',
    website: 'https://github.com/DataDog/build-plugins#readme',
  },
  source: {
    github: 'DataDog/build-plugins',
    npm: '@datadog/rspack-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 47433,
      weekly: 9591,
    },
  },
})
