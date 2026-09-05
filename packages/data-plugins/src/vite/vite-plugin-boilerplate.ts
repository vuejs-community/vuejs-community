import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-boilerplate',
  description: 'A Vite plugin that automatically writes component boilerplate when you create a new .tsx, .jsx, or .vue file.',
  version: '0.3.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'vue',
    'scaffold',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mt-shihab26/vite-plugin-boilerplate',
    npm: 'https://www.npmjs.com/package/vite-plugin-boilerplate',
  },
  stats: {
    downloads: {
      monthly: 147,
      weekly: 22,
    },
  },
})
