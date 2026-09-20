import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-dts',
  description: 'Victor Bo\'s Unplugin Template.',
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
    github: 'https://github.com/vtrbo/vite-plugin-generate-dts',
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-dts',
    website: 'https://github.com/vtrbo/vite-plugin-generate-dts#readme',
  },
  source: {
    github: 'vtrbo/vite-plugin-generate-dts',
    npm: 'vite-plugin-generate-dts',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
