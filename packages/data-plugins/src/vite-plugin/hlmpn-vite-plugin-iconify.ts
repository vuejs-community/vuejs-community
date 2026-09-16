import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hlmpn/vite-plugin-iconify',
  description: 'A vite plugin to statically inline iconify icons in Vue and React components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'icon',
    'iconify',
  ],
  source: {
    github: 'hlpmenu/vite-plugin-iconify',
    npm: '@hlmpn/vite-plugin-iconify',
  },
  links: {
    github: 'https://github.com/hlpmenu/vite-plugin-iconify',
    npm: 'https://www.npmjs.com/package/@hlmpn/vite-plugin-iconify',
    website: 'https://github.com/hlpmenu/vite-plugin-iconify#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
