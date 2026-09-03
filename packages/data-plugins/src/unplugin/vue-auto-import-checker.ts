import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vue-auto-import-checker',
  description: 'Check if the used tags are all registered within your components.d.ts',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'vue',
    'vuetify',
    'vuuse',
    'quasar',
    'nuxt',
    'naive-ui',
    'primevue',
    'vue-router',
    'unplugin',
    'components.d.ts',
    'tags',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/marcelwagner/vue-auto-import-checker',
    npm: 'https://www.npmjs.com/package/vue-auto-import-checker',
  },
  stats: {
    downloads: {
      monthly: 721,
      weekly: 150,
    },
  },
})
