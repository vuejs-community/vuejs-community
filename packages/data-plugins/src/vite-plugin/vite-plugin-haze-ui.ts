import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-haze-ui',
  description: 'Vite plugin that injects haze-ui per-component CSS side-effect imports based on named imports from \'haze-ui\'',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'haze-ui',
    'css',
  ],
  source: {
    github: 'wmzy/vite-plugin-haze-ui',
    npm: 'vite-plugin-haze-ui',
  },
  links: {
    github: 'https://github.com/wmzy/vite-plugin-haze-ui',
    npm: 'https://www.npmjs.com/package/vite-plugin-haze-ui',
    website: 'https://github.com/wmzy/vite-plugin-haze-ui#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
