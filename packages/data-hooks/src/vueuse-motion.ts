import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse-motion',
  description: '🤹 Vue Composables putting your components in motion',
  icon: 'logos:vueuse',
  category: 'hooks',
  types: ['animation', 'composable-library'],
  tags: ['hooks', 'composables', 'animation', 'motion', 'vue3'],

  source: {
    github: 'vueuse/motion',
    npm: '@vueuse/motion',
  },

  links: {
    github: 'https://github.com/vueuse/motion',
    npm: 'https://www.npmjs.com/package/@vueuse/motion',
    website: 'https://motion.vueuse.org',
  },

  stats: {
    stars: 2759,
    downloads: {
      monthly: 706725,
      weekly: 179912,
    },
  },
})
