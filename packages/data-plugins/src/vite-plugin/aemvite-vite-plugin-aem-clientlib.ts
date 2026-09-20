import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-aem-clientlib',
  description: 'Vite plugin and descriptor emitter for AEM clientlibs — byte-identical .content.xml, js.txt, css.txt.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aem',
    'aem-clientlib-generator',
    'aemvite',
    'clientlib',
    'descriptor',
    'edge-delivery',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-aem-clientlib',
    website: 'https://github.com/LucaNerlich/aem-vite#readme',
  },
  source: {
    github: 'LucaNerlich/aem-vite',
    npm: '@aemvite/vite-plugin-aem-clientlib',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 62,
      weekly: 9,
    },
  },
})
