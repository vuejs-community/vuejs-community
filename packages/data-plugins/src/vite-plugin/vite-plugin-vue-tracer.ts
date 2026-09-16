import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-tracer',
  description: 'Tracer for the source code of elements and vdoms in Vue SFC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vite-plugin',
    'devtools',
  ],
  source: {
    github: 'antfu/vite-plugin-vue-tracer',
    npm: 'vite-plugin-vue-tracer',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-vue-tracer',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-tracer',
    website: 'https://github.com/antfu/vite-plugin-vue-tracer#readme',
  },
  stats: {
    stars: 87,
    downloads: {
      monthly: 5652042,
      weekly: 1245817,
    },
  },
})
