import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-transform-with-convert',
  description: 'A plugin for vite that convert from require syntax to import that compat for es module.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'require',
  ],
  source: {
    github: 'winchesHe/vite-plugin-require-transform',
    npm: 'vite-plugin-require-transform-with-convert',
  },
  links: {
    github: 'https://github.com/winchesHe/vite-plugin-require-transform',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-transform-with-convert',
    website: 'https://github.com/winchesHe/vite-plugin-require-transform#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
