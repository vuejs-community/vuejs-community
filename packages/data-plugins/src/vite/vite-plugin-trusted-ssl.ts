import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-trusted-ssl',
  description: 'Locally-trusted HTTPS for Vite: local CA + reverse proxy (Vite stays on HTTP)',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'wengmaodong/vite-plugin-trusted-ssl',
    npm: 'vite-plugin-trusted-ssl',
  },
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
