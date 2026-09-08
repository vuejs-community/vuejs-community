import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-config-html',
  description: 'This plugin helps us configure html script,meta,link etc.',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'html',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'eliduty/plugin',
    npm: 'vite-plugin-config-html',
  },
  links: {
    github: 'https://github.com/eliduty/plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-config-html',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
