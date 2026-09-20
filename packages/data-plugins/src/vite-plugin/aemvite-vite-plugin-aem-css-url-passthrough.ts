import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aemvite/vite-plugin-aem-css-url-passthrough',
  description: 'Vite plugin that rewrites CSS url() references in built clientlib stylesheets back to ../resources/<sub>/<file> form, mirroring webpack css-loader { url: false } for AEM clientlibs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aem',
    'aemvite',
    'clientlib',
    'css',
    'css-loader',
    'edge-delivery',
    'resources',
    'url',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LucaNerlich/aem-vite',
    npm: 'https://www.npmjs.com/package/@aemvite/vite-plugin-aem-css-url-passthrough',
    website: 'https://github.com/LucaNerlich/aem-vite#readme',
  },
  source: {
    github: 'LucaNerlich/aem-vite',
    npm: '@aemvite/vite-plugin-aem-css-url-passthrough',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41,
      weekly: 2,
    },
  },
})
