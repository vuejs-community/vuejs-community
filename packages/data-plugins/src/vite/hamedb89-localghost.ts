import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@hamedb89/localghost',
  description: 'Friendly local hostnames for app repos with .localghost, Caddy, /etc/hosts, and Vite.',
  version: '0.6.3',
  category: 'plugin',
  tags: [
    'localghost',
    'localhost',
    'local-dev',
    'local-development',
    'local-https',
    'https',
    'caddy',
    'vite',
    'vite-plugin',
    'hosts-file',
    'reverse-proxy',
    'developer-tools',
    'cli',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hamedb89/localghost',
    npm: 'https://www.npmjs.com/package/@hamedb89/localghost',
  },
  stats: {
    downloads: {
      monthly: 2143,
      weekly: 526,
    },
  },
})
