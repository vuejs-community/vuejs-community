import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console',
  description: 'Vite plugin: injects eruda mobile DevTools (Console, Network, Elements, Storage) in dev mode. Zero production footprint.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'eruda',
    'console',
    'devtools',
    'capacitor',
    'mobile',
    'debug',
  ],
  source: {
    npm: 'vite-plugin-console',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-console',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
