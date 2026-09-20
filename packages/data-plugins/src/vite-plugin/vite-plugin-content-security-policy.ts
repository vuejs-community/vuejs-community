import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-content-security-policy',
  description: 'A Vite plugin for managing Content Security Policy (CSP) headers during development and generating Apache/Nginx configuration files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Coreoz/vite-plugin-content-security-policy',
    npm: 'https://www.npmjs.com/package/vite-plugin-content-security-policy',
    website: 'https://github.com/Coreoz/vite-plugin-content-security-policy#readme',
  },
  source: {
    github: 'Coreoz/vite-plugin-content-security-policy',
    npm: 'vite-plugin-content-security-policy',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 18335,
      weekly: 3924,
    },
  },
})
