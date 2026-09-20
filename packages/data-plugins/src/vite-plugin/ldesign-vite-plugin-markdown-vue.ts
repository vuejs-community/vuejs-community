import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ldesign/vite-plugin-markdown-vue',
  description: 'Compile Markdown to Vue component',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'markdown-it',
  ],
  links: {
    github: 'https://github.com/mdit-vue/vite-plugin-vue-markdown',
    npm: 'https://www.npmjs.com/package/@ldesign/vite-plugin-markdown-vue',
    website: 'https://github.com/mdit-vue/vite-plugin-vue-markdown',
  },
  source: {
    github: 'mdit-vue/vite-plugin-vue-markdown',
    npm: '@ldesign/vite-plugin-markdown-vue',
  },
  stats: {
    stars: 625,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
