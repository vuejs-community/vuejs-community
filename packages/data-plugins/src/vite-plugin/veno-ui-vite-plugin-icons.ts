import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@veno-ui/vite-plugin-icons',
  description: 'Vite icons plugin for Veno UI',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-icons',
    'veno-ui icons',
  ],
  source: {
    github: 'qq15725/veno-ui',
    npm: '@veno-ui/vite-plugin-icons',
  },
  links: {
    github: 'https://github.com/qq15725/veno-ui',
    npm: 'https://www.npmjs.com/package/@veno-ui/vite-plugin-icons',
    website: 'https://github.com/qq15725/veno-ui/blob/master/packages/vite-plugin-icons',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 18,
      weekly: 8,
    },
  },
})
