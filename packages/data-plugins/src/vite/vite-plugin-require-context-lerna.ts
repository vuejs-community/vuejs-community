import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-context-lerna',
  description: 'A vite plugin that support require.context in vite and support lerna cross-project scenarios',
  icon: 'logos:vite-icon',
  version: '1.0.10',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'require.context',
    'lerna',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kanfashidoufu/vite-plugin-require-context-lerna',
    npm: 'vite-plugin-require-context-lerna',
  },
  links: {
    github: 'https://github.com/kanfashidoufu/vite-plugin-require-context-lerna',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-context-lerna',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
