import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@risemaxi/envault',
  description: 'Build-time validated, typed environment variables for any bundler',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'env',
    'environment',
    'build-time',
    'standard-schema',
    'vite',
    'webpack',
    'metro',
    'unplugin',
  ],
  source: {
    github: 'risevest/envault',
    npm: '@risemaxi/envault',
  },
  links: {
    github: 'https://github.com/risevest/envault',
    npm: 'https://www.npmjs.com/package/@risemaxi/envault',
    website: 'https://github.com/risevest/envault#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1078,
      weekly: 304,
    },
  },
})
