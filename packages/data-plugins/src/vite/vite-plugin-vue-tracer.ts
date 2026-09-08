import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-tracer',
  description: 'Tracer for the source code of elements and vdoms in Vue SFC',
  icon: 'logos:vite-icon',
  version: '1.5.0',
  category: 'plugin',
  tags: [
    'vue',
    'vite-plugin',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'antfu/vite-plugin-vue-tracer',
    npm: 'vite-plugin-vue-tracer',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-vue-tracer',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-tracer',
  },
  stats: {
    downloads: {
      monthly: 6566918,
      weekly: 1690876,
    },
  },
})
