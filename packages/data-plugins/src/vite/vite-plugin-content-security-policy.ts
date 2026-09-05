import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-content-security-policy',
  description: 'A Vite plugin for managing Content Security Policy (CSP) headers during development and generating Apache/Nginx configuration files',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'content-security-policy',
    'csp',
    'security',
    'headers',
    'apache',
    'nginx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Coreoz/vite-plugin-content-security-policy',
    npm: 'https://www.npmjs.com/package/vite-plugin-content-security-policy',
  },
  stats: {
    downloads: {
      monthly: 20239,
      weekly: 5238,
    },
  },
})
