import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dom',
  description: 'Enables DOM manipulation and comment injection during the build process',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'htmlparser2',
    'dom',
    'domhandler',
    'domutils',
    'dom-serializer',
  ],
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-dom',
  },
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-dom',
    website: 'https://github.com/bent10/vite-plugins/tree/main/packages/plugin-dom',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 239,
      weekly: 29,
    },
  },
})
