import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-auto-import-checker',
  description: 'Check if the used tags are all registered within your components.d.ts',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/marcelwagner/vue-auto-import-checker',
    npm: 'https://www.npmjs.com/package/vue-auto-import-checker',
    website: 'https://www.npmjs.com/package/vue-auto-import-checker',
  },
  source: {
    github: 'marcelwagner/vue-auto-import-checker',
    npm: 'vue-auto-import-checker',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 533,
      weekly: 152,
    },
  },
})
