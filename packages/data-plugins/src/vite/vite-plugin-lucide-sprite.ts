import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lucide-sprite',
  description: 'Vite plugin that generates a Lucide SVG sprite from icon ids exported in a Svelte component',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'lucide',
    'svg-sprite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mustafa0x/vite-plugin-lucide-sprite',
    npm: 'https://www.npmjs.com/package/vite-plugin-lucide-sprite',
  },
  stats: {
    downloads: {
      monthly: 880,
      weekly: 146,
    },
  },
})
