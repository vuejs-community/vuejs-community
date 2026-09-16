import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kirchdev/vite-plugin-iconify-bundle',
  description: 'Vite plugin that bundles only the Iconify icons your source actually uses — no runtime API calls, no whole collections.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bundle',
    'iconify',
    'icons',
    'kirchdev',
    'ssr',
    'tree-shaking',
    'virtual-module',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'kirchDev/vite-plugin-iconify-bundle',
    npm: '@kirchdev/vite-plugin-iconify-bundle',
  },
  links: {
    github: 'https://github.com/kirchDev/vite-plugin-iconify-bundle',
    npm: 'https://www.npmjs.com/package/@kirchdev/vite-plugin-iconify-bundle',
    website: 'https://github.com/kirchDev/vite-plugin-iconify-bundle#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4287,
      weekly: 608,
    },
  },
})
