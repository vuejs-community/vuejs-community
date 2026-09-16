import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-config-html',
  description: 'This plugin helps us configure html script,meta,link etc.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'html',
  ],
  source: {
    github: 'eliduty/plugin',
    npm: 'vite-plugin-config-html',
  },
  links: {
    github: 'https://github.com/eliduty/plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-config-html',
    website: 'https://github.com/eliduty/plugin/blob/main/packages/vite-plugin-config-html/README.md',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
