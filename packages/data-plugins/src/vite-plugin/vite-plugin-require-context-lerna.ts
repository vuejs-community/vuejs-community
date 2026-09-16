import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-context-lerna',
  description: 'A vite plugin that support require.context in vite and support lerna cross-project scenarios',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'require.context',
    'lerna',
  ],
  source: {
    github: 'kanfashidoufu/vite-plugin-require-context-lerna',
    npm: 'vite-plugin-require-context-lerna',
  },
  links: {
    github: 'https://github.com/kanfashidoufu/vite-plugin-require-context-lerna',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-context-lerna',
    website: 'https://github.com/kanfashidoufu/vite-plugin-require-context-lerna#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
