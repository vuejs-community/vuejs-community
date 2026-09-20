import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hamedb89/localghost',
  description: 'Friendly local hostnames for app repos with .localghost, Caddy, /etc/hosts, and Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/hamedb89/localghost',
    npm: 'https://www.npmjs.com/package/@hamedb89/localghost',
    website: 'https://hamedb89.github.io/localghost/',
  },
  source: {
    github: 'hamedb89/localghost',
    npm: '@hamedb89/localghost',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1936,
      weekly: 121,
    },
  },
})
