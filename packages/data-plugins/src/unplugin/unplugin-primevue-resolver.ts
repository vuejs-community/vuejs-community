import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-primevue-resolver',
  description: 'This is a custom resolver for unplugin, with an up-to-date list of PrimeVue components.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'primevue',
    'resolver',
  ],
  source: {
    github: 'F1nnM/unplugin-primevue-resolver',
    npm: 'unplugin-primevue-resolver',
  },
  links: {
    github: 'https://github.com/F1nnM/unplugin-primevue-resolver',
    npm: 'https://www.npmjs.com/package/unplugin-primevue-resolver',
    website: 'https://github.com/F1nnM/unplugin-primevue-resolver#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 180,
      weekly: 37,
    },
  },
})
