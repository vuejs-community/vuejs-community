import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-trusted-ssl',
  description: 'Locally-trusted HTTPS for Vite: local CA + reverse proxy (Vite stays on HTTP)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/wengmaodong/vite-plugin-trusted-ssl',
    npm: 'https://www.npmjs.com/package/vite-plugin-trusted-ssl',
    website: 'https://github.com/wengmaodong/vite-plugin-trusted-ssl#readme',
  },
  source: {
    github: 'wengmaodong/vite-plugin-trusted-ssl',
    npm: 'vite-plugin-trusted-ssl',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 48,
      weekly: 6,
    },
  },
})
