import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-milpa',
  description: 'El toolkit frontend del framework milpa (FastAPI + Jinja), estilo laravel-vite-plugin: hot-file para HMR, manifest para el helper vite() de Jinja, multi-app (surcos/), PWA opcional con Serwist, ASSET_URL para deploy bajo sub-ruta/CDN — y file-based routin',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'milpa',
    'fastapi',
    'jinja',
    'laravel-vite',
    'backend-integration',
    'pwa',
    'serwist',
    'microfrontends',
    'file-based-routing',
    'react-router',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/calcifux/vite-plugin-milpa',
    npm: 'https://www.npmjs.com/package/vite-plugin-milpa',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 11,
    },
  },
})
