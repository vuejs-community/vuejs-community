import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-milpa',
  description: 'El toolkit frontend del framework milpa (FastAPI + Jinja), estilo laravel-vite-plugin: hot-file para HMR, manifest para el helper vite() de Jinja, multi-app (surcos/), PWA opcional con Serwist, ASSET_URL para deploy bajo sub-ruta/CDN — y file-based routin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/calcifux/vite-plugin-milpa',
    npm: 'https://www.npmjs.com/package/vite-plugin-milpa',
    website: 'https://github.com/calcifux/vite-plugin-milpa#readme',
  },
  source: {
    github: 'calcifux/vite-plugin-milpa',
    npm: 'vite-plugin-milpa',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 49,
      weekly: 2,
    },
  },
})
