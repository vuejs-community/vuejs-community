import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-aem-resources',
  description: 'Vite plugin that copies an AEM clientlib resources/ tree into the build output, skipping .gitkeep-only / empty sources.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aem',
    'aemvite',
    'clientlib',
    'copy',
    'edge-delivery',
    'resources',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-aem-resources',
    website: 'https://github.com/LucaNerlich/aem-vite#readme',
  },
  source: {
    github: 'LucaNerlich/aem-vite',
    npm: '@aemvite/vite-plugin-aem-resources',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 58,
      weekly: 3,
    },
  },
})
