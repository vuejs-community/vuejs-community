import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hashel',
  description: 'Vite plugin: a lightweight Storybook alternative. Every *.el.* file gets its own hashed page, browsable in a book UI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'components',
    'storybook',
    'svelte',
    'vite',
    'vite-plugin',
    'vue',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-hashel',
  },
  source: {
    npm: 'vite-plugin-hashel',
  },
})
