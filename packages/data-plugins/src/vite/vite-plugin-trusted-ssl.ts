import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-trusted-ssl',
  description: 'Locally-trusted HTTPS for Vite: local CA + reverse proxy (Vite stays on HTTP)',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'https',
    'ssl',
    'tls',
    'certificate',
    'local-ca',
    'reverse-proxy',
    'mkcert',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wengmaodong/vite-plugin-trusted-ssl',
    npm: 'https://www.npmjs.com/package/vite-plugin-trusted-ssl',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 7,
    },
  },
})
