import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-aem-resources',
  description: 'Vite plugin that copies an AEM clientlib resources/ tree into the build output, skipping .gitkeep-only / empty sources.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'aem',
    'clientlib',
    'vite',
    'vite-plugin',
    'resources',
    'copy',
    'edge-delivery',
    'aemvite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-aem-resources',
  },
  stats: {
    downloads: {
      monthly: 55,
      weekly: 6,
    },
  },
})
