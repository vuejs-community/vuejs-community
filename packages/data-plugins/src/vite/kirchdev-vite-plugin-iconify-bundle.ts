import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kirchdev/vite-plugin-iconify-bundle',
  description: 'Vite plugin that bundles only the Iconify icons your source actually uses — no runtime API calls, no whole collections.',
  version: '0.3.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kirchDev/vite-plugin-iconify-bundle',
    npm: 'https://www.npmjs.com/package/@kirchdev/vite-plugin-iconify-bundle',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
