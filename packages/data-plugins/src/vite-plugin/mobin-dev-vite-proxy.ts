import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mobin-dev-vite-proxy',
  description: 'Development-only Vite proxy for Mobin APIs, SSO and local backend cookies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'mobin',
    'development',
    'proxy',
    'cookies',
    'sso',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/mobin-dev-vite-proxy',
  },
  source: {
    npm: 'mobin-dev-vite-proxy',
  },
})
