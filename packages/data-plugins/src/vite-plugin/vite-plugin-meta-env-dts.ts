import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-meta-env-dts',
  description: 'Automatically generate type declarations based on env.* files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xparcai/vite-plugin-meta-env-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-meta-env-dts',
    website: 'https://github.com/xparcai/vite-plugin-meta-env-dts#readme',
  },
  source: {
    github: 'xparcai/vite-plugin-meta-env-dts',
    npm: 'vite-plugin-meta-env-dts',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 70,
      weekly: 14,
    },
  },
})
