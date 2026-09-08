import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-cite',
  description: 'Cite-to-copy for any Vue element.',
  icon: 'logos:vite-icon',
  version: '0.2.3',
  category: 'plugin',
  tags: [
    'vue',
    'vue3',
    'vite',
    'vite-plugin',
    'devtools',
    'vue-devtools',
    'tracer',
    'vue-tracer',
    'annotation',
    'citation',
    'cite',
    'source-link',
    'click-to-source',
    'markdown',
    'inspector',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'JianJroh/vue-cite',
    npm: 'vite-plugin-vue-cite',
  },
  links: {
    github: 'https://github.com/JianJroh/vue-cite',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-cite',
  },
  stats: {
    downloads: {
      monthly: 200,
      weekly: 13,
    },
  },
})
