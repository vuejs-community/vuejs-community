import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-security-scan',
  description: 'Vite plugin for scanning security risks in frontend code',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'security',
    'xss',
    'scan',
    'ast',
    'frontend-security',
    'code-analysis',
    'vue',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rocktntz/vite-plugin-security-scan',
    npm: 'https://www.npmjs.com/package/vite-plugin-security-scan',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 0,
    },
  },
})
