import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'swrv',
  description: 'Stale-while-revalidate data fetching for Vue',
  icon: 'dinkie-icons:hook',
  category: 'hooks',
  types: ['data-fetching', 'composable-library'],
  tags: ['hooks', 'composables', 'data-fetching', 'swr', 'vue3'],

  source: {
    github: 'Kong/swrv',
    npm: 'swrv',
  },

  links: {
    github: 'https://github.com/Kong/swrv',
    npm: 'https://www.npmjs.com/package/swrv',
    website: 'https://swrv.vercel.app',
  },

  stats: {
    stars: 2277,
    downloads: {
      monthly: 4406196,
      weekly: 899431,
    },
  },
})
