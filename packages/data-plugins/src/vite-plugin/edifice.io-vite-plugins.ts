import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@edifice.io/vite-plugins',
  description: 'Shared Vite plugins for Edifice frontend modules (dev proxy, local i18n serving, bootstrap cache-busting, dev entry rewriting)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'edifice',
    'frontend',
    'framework',
  ],
  links: {
    github: 'https://github.com/edificeio/edifice-frontend-framework',
    npm: 'https://www.npmjs.com/package/@edifice.io/vite-plugins',
    website: 'https://github.com/edificeio/edifice-frontend-framework/tree/main/packages/vite-plugins#readme',
  },
  source: {
    github: 'edificeio/edifice-frontend-framework',
    npm: '@edifice.io/vite-plugins',
  },
})
