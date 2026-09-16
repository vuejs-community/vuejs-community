import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xyd-js/vite-plugin',
  description: 'Vite plugin that builds an xyd docs project during `vite build` and merges the static docs output into the host app\'s build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'xyd',
    'vite',
    'vite-plugin',
    'docs',
    'documentation',
  ],
  source: {
    npm: '@xyd-js/vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xyd-js/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2247,
      weekly: 549,
    },
  },
})
