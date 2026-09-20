import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-auto-tailwind-reference',
  description: 'Automatically adds `@reference` directive to Vue SFC `<style>` blocks',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css',
    'vue',
    'sfc',
    'tailwind',
  ],
  links: {
    github: 'https://github.com/alaa-abdallah1/vite-plugin-vue-auto-tailwind-reference',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-auto-tailwind-reference',
    website: 'https://github.com/alaa-abdallah1/vite-plugin-vue-auto-tailwind-reference#readme',
  },
  source: {
    github: 'alaa-abdallah1/vite-plugin-vue-auto-tailwind-reference',
    npm: 'vite-plugin-vue-auto-tailwind-reference',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 29,
      weekly: 2,
    },
  },
})
