import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dom',
  description: 'Enables DOM manipulation and comment injection during the build process',
  version: '1.0.5',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-dom',
  },
  stats: {
    downloads: {
      monthly: 251,
      weekly: 34,
    },
  },
})
