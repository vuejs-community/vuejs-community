import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-aem-css-url-passthrough',
  description: 'Vite plugin that rewrites CSS url() references in built clientlib stylesheets back to ../resources/<sub>/<file> form, mirroring webpack css-loader { url: false } for AEM clientlibs.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'aem',
    'clientlib',
    'vite',
    'vite-plugin',
    'css',
    'url',
    'css-loader',
    'resources',
    'edge-delivery',
    'aemvite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-aem-css-url-passthrough',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 1,
    },
  },
})
