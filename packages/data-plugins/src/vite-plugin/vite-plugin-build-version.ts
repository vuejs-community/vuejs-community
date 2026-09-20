import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-version',
  description: '记录下本次构建的package.json版本',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'version',
  ],
  links: {
    github: 'https://github.com/Webming19/vite-plugin-build-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-version',
    website: 'https://github.com/Webming19/vite-plugin-build-version',
  },
  source: {
    github: 'Webming19/vite-plugin-build-version',
    npm: 'vite-plugin-build-version',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 39,
      weekly: 4,
    },
  },
})
