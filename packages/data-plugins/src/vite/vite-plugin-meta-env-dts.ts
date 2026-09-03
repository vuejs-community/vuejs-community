import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-meta-env-dts',
  description: 'Automatically generate type declarations based on env.* files.',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xparcai/vite-plugin-meta-env-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-meta-env-dts',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 10,
    },
  },
})
