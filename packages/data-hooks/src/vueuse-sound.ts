import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse-sound',
  description: '播放音效的 Vue composable',
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
    stars: 560,
    downloads: {
      monthly: 61762,
      weekly: 16778,
    },
  },
})
