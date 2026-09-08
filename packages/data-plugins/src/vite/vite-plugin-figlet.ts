import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-figlet',
  description: 'A Vite plugin that allows you to display FIGfont-style text during the startup of your [vite](https://github.com/vitejs/vite) development server.',
  icon: 'logos:vite-icon',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'figlet',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'leifarriens/vite-plugin-figlet',
    npm: 'vite-plugin-figlet',
  },
  links: {
    github: 'https://github.com/leifarriens/vite-plugin-figlet',
    npm: 'https://www.npmjs.com/package/vite-plugin-figlet',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 2,
    },
  },
})
