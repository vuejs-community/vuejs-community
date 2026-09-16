import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-security-scan',
  description: 'Vite plugin for scanning security risks in frontend code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'rocktntz/vite-plugin-security-scan',
    npm: 'vite-plugin-security-scan',
  },
  links: {
    github: 'https://github.com/rocktntz/vite-plugin-security-scan',
    npm: 'https://www.npmjs.com/package/vite-plugin-security-scan',
    website: 'https://github.com/rocktntz/vite-plugin-security-scan#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
