import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-twind',
  description: 'Generates tailwind CSS from Vue component class names, and injects them into the component or emits them. Useful for Vue web components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'twind',
    'tailwind',
    'web-component',
  ],
  source: {
    github: 'Buroni/vite-plugin-vue-twind',
    npm: 'vite-plugin-vue-twind',
  },
  links: {
    github: 'https://github.com/Buroni/vite-plugin-vue-twind',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-twind',
    website: 'https://github.com/Buroni/vite-plugin-vue-twind#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
