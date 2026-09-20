import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-package-config',
  description: 'Extend Vite config from package.json field',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/antfu/vite-plugin-package-config',
    npm: 'https://www.npmjs.com/package/vite-plugin-package-config',
    website: 'https://github.com/antfu/vite-plugin-package-config#readme',
  },
  source: {
    github: 'antfu/vite-plugin-package-config',
    npm: 'vite-plugin-package-config',
  },
  stats: {
    stars: 42,
    downloads: {
      monthly: 22870,
      weekly: 4477,
    },
  },
})
