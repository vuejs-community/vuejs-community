import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dynamic-require-import',
  description: 'Converts require dynamic loading to import dynamic loading',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'require',
    'import',
    'dynamic',
  ],
  source: {
    github: 'yangyanhui1217/vite-plugins-related',
    npm: 'vite-plugin-dynamic-require-import',
  },
  links: {
    github: 'https://github.com/yangyanhui1217/vite-plugins-related',
    npm: 'https://www.npmjs.com/package/vite-plugin-dynamic-require-import',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 0,
    },
  },
})
