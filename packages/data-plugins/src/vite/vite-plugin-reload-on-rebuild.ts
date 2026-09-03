import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-reload-on-rebuild',
  description: 'Reloads page when current html file changes (on rebuild; without dev server)',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'vitejs',
    'rebuild',
    'reload',
    'watch',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/crutch12/vite-plugin-reload-on-rebuild',
    npm: 'https://www.npmjs.com/package/vite-plugin-reload-on-rebuild',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 1,
    },
  },
})
