import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-transform-with-convert',
  description: 'A plugin for vite that convert from require syntax to import that compat for es module.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'require',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/winchesHe/vite-plugin-require-transform',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-transform-with-convert',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 1,
    },
  },
})
