import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-stamp',
  description: 'Vite plugin that stamps build information (time, version, git commit, mode) into index.html as <meta> tags',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'meta',
    'stamp',
    'version',
    'git',
    'html',
  ],
  links: {
    github: 'https://github.com/LouieJiang/vite-plugin-build-stamp',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-stamp',
    website: 'https://github.com/LouieJiang/vite-plugin-build-stamp#readme',
  },
  source: {
    github: 'LouieJiang/vite-plugin-build-stamp',
    npm: 'vite-plugin-build-stamp',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 8,
    },
  },
})
