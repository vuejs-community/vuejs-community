import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse-sound',
  description: '🔊 A Vue composable for playing sound effects',
  icon: 'logos:vueuse',
  category: 'hooks',
  types: ['composable-library'],
  tags: ['hooks', 'composables', 'audio', 'sound', 'vue3'],

  source: {
    github: 'vueuse/sound',
    npm: '@vueuse/sound',
  },

  links: {
    github: 'https://github.com/vueuse/sound',
    npm: 'https://www.npmjs.com/package/@vueuse/sound',
    website: 'https://sound.vueuse.org',
  },

  stats: {
    stars: 559,
    downloads: {
      monthly: 57434,
      weekly: 12391,
    },
  },
})
