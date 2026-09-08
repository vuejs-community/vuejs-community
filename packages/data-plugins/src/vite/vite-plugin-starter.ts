import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-starter',
  description: 'A plugin to support  inspect react component.',
  icon: 'logos:vite-icon',
  version: '0.5.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-starter',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'sudongyuer/vite-plugin-starter',
    npm: 'vite-plugin-starter',
  },
  links: {
    github: 'https://github.com/sudongyuer/vite-plugin-starter',
    npm: 'https://www.npmjs.com/package/vite-plugin-starter',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
