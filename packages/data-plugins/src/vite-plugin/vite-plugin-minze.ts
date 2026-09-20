import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minze',
  description: 'Vite plugin for Minze dev environment.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'minze',
    'minzejs',
  ],
  links: {
    github: 'https://github.com/sergejcodes/minze',
    npm: 'https://www.npmjs.com/package/vite-plugin-minze',
    website: 'https://github.com/sergejcodes/minze/tree/main/packages/vite-plugin-minze#readme',
  },
  source: {
    github: 'sergejcodes/minze',
    npm: 'vite-plugin-minze',
  },
  stats: {
    stars: 571,
    downloads: {
      monthly: 28,
      weekly: 4,
    },
  },
})
