import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-basic-ssl',
  description: 'A Vite plugin to generate untrusted certificates for HTTPS dev servers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'certificate',
    'https',
  ],
  source: {
    github: 'vitejs/vite-plugin-basic-ssl',
    npm: '@vitejs/plugin-basic-ssl',
  },
  links: {
    github: 'https://github.com/vitejs/vite-plugin-basic-ssl',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-basic-ssl',
    website: 'https://github.com/vitejs/vite-plugin-basic-ssl/#readme',
  },
  stats: {
    stars: 516,
    downloads: {
      monthly: 21926378,
      weekly: 4155896,
    },
  },
})
