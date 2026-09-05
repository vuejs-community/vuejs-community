import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-twind',
  description: 'Generates tailwind CSS from Vue component class names, and injects them into the component or emits them. Useful for Vue web components',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'twind',
    'tailwind',
    'web-component',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Buroni/vite-plugin-vue-twind',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-twind',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
