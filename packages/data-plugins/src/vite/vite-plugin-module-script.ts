import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-module-script',
  description: 'A vite plugin for dynamic creating a module script tag.',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-plugin-module-script',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-module-script',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-module-script',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
