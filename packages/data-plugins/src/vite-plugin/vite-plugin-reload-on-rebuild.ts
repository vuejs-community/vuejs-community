import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-reload-on-rebuild',
  description: 'Reloads page when current html file changes (on rebuild; without dev server)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'vitejs',
    'rebuild',
    'reload',
    'watch',
  ],
  links: {
    github: 'https://github.com/crutch12/vite-plugin-reload-on-rebuild',
    npm: 'https://www.npmjs.com/package/vite-plugin-reload-on-rebuild',
    website: 'https://github.com/crutch12/vite-plugin-reload-on-rebuild#readme',
  },
  source: {
    github: 'crutch12/vite-plugin-reload-on-rebuild',
    npm: 'vite-plugin-reload-on-rebuild',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
