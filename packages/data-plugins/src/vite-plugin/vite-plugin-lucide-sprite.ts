import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lucide-sprite',
  description: 'Vite plugin that generates a Lucide SVG sprite from icon ids exported in a Svelte component',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svelte',
    'lucide',
    'svg-sprite',
  ],
  links: {
    github: 'https://github.com/mustafa0x/vite-plugin-lucide-sprite',
    npm: 'https://www.npmjs.com/package/vite-plugin-lucide-sprite',
    website: 'https://github.com/mustafa0x/vite-plugin-lucide-sprite#readme',
  },
  source: {
    github: 'mustafa0x/vite-plugin-lucide-sprite',
    npm: 'vite-plugin-lucide-sprite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 719,
      weekly: 187,
    },
  },
})
