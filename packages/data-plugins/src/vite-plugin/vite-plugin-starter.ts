import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-starter',
  description: 'A plugin to support  inspect react component.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-starter',
  ],
  links: {
    github: 'https://github.com/sudongyuer/vite-plugin-starter',
    npm: 'https://www.npmjs.com/package/vite-plugin-starter',
    website: 'https://github.com/sudongyuer/vite-plugin-starter#readme',
  },
  source: {
    github: 'sudongyuer/vite-plugin-starter',
    npm: 'vite-plugin-starter',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
