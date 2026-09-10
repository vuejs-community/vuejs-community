import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vooks',
  description: 'Utils Composable for Vue',
  icon: 'dinkie-icons:hook',
  category: 'hooks',
  types: ['composable-library'],
  tags: ['hooks', 'composables', 'vue3'],

  source: {
    github: '07akioni/vooks',
    npm: 'vooks',
  },

  links: {
    github: 'https://github.com/07akioni/vooks',
    npm: 'https://www.npmjs.com/package/vooks',
  },

  stats: {
    stars: 48,
    downloads: {
      monthly: 411589,
      weekly: 96855,
    },
  },
})
