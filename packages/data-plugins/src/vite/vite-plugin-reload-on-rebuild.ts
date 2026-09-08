import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-reload-on-rebuild',
  description: 'Reloads page when current html file changes (on rebuild; without dev server)',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'crutch12/vite-plugin-reload-on-rebuild',
    npm: 'vite-plugin-reload-on-rebuild',
  },
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
