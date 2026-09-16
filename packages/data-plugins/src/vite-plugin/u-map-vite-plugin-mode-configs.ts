import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@u-map/vite-plugin-mode-configs',
  description: 'Vite plugin to apply mode-suffixed runtime config files (e.g. app-config-dt.js) over default names on build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'runtime-config',
  ],
  source: {
    npm: '@u-map/vite-plugin-mode-configs',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@u-map/vite-plugin-mode-configs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
