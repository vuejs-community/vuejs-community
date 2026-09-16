import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-boilerplate',
  description: 'A Vite plugin that automatically writes component boilerplate when you create a new .tsx, .jsx, or .vue file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'vue',
    'scaffold',
  ],
  source: {
    github: 'mt-shihab26/vite-plugin-boilerplate',
    npm: 'vite-plugin-boilerplate',
  },
  links: {
    github: 'https://github.com/mt-shihab26/vite-plugin-boilerplate',
    npm: 'https://www.npmjs.com/package/vite-plugin-boilerplate',
    website: 'https://github.com/mt-shihab26/vite-plugin-boilerplate#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 90,
      weekly: 10,
    },
  },
})
