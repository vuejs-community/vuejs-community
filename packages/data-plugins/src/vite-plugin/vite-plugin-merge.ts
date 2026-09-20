import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-merge',
  description: 'Vite plugin which merges multiple input directories into the output directory.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NixySoftware/vite-plugin-merge',
    npm: 'https://www.npmjs.com/package/vite-plugin-merge',
    website: 'https://github.com/NixySoftware/vite-plugin-merge#readme',
  },
  source: {
    github: 'NixySoftware/vite-plugin-merge',
    npm: 'vite-plugin-merge',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 13,
    },
  },
})
