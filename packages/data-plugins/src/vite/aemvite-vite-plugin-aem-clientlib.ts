import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-aem-clientlib',
  description: 'Vite plugin and descriptor emitter for AEM clientlibs — byte-identical .content.xml, js.txt, css.txt.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'aem',
    'clientlib',
    'vite',
    'vite-plugin',
    'descriptor',
    'edge-delivery',
    'aemvite',
    'aem-clientlib-generator',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-aem-clientlib',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 8,
    },
  },
})
