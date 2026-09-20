import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@feugene/unplugin-granularity',
  description: 'unplugin-vue-components resolver for @feugene/granularity — granular auto-import for components and directives.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vue',
    'vue3',
    'unplugin',
    'unplugin-vue-components',
    'resolver',
    'auto-import',
    'tree-shaking',
    'granularity',
    'design-system',
  ],
  links: {
    github: 'https://github.com/efureev/granularity',
    npm: 'https://www.npmjs.com/package/@feugene/unplugin-granularity',
    website: 'https://efureev.github.io/granularity',
  },
  source: {
    github: 'efureev/granularity',
    npm: '@feugene/unplugin-granularity',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1082,
      weekly: 60,
    },
  },
})
