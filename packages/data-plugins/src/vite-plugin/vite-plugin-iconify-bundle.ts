import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconify-bundle',
  description: 'On-demand bundle Iconify icons to the client.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rolldown-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'typed-sigterm/vite-plugin-iconify-bundle',
    npm: 'vite-plugin-iconify-bundle',
  },
  links: {
    github: 'https://github.com/typed-sigterm/vite-plugin-iconify-bundle',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconify-bundle',
    website: 'https://github.com/typed-sigterm/vite-plugin-iconify-bundle#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 27,
      weekly: 9,
    },
  },
})
