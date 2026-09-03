import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-auto-tailwind-reference',
  description: 'Automatically adds `@reference` directive to Vue SFC `<style>` blocks',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'vue',
    'sfc',
    'tailwind',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/alaa-abdallah1/vite-plugin-vue-auto-tailwind-reference',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-auto-tailwind-reference',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 8,
    },
  },
})
