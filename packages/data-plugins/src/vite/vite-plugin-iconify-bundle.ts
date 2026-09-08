import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconify-bundle',
  description: 'On-demand bundle Iconify icons to the client.',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'rolldown-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'typed-sigterm/vite-plugin-iconify-bundle',
    npm: 'vite-plugin-iconify-bundle',
  },
  links: {
    github: 'https://github.com/typed-sigterm/vite-plugin-iconify-bundle',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconify-bundle',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 1,
    },
  },
})
