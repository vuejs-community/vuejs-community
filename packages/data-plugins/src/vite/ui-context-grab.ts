import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ui-context-grab',
  description: 'A Vite dev plugin for grabbing DOM, Vue component, source, and style context from the page.',
  version: '0.1.0-alpha.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'devtools',
    'inspector',
    'debugging',
    'dom',
    'context',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/XinChou16/ui-context-grab',
    npm: 'https://www.npmjs.com/package/ui-context-grab',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
