import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console',
  description: 'Vite plugin: injects eruda mobile DevTools (Console, Network, Elements, Storage) in dev mode. Zero production footprint.',
  version: '1.1.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-console',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
