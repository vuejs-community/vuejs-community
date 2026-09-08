import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-stamp',
  description: 'Vite plugin that stamps build information (time, version, git commit, mode) into index.html as <meta> tags',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'LouieJiang/vite-plugin-build-stamp',
    npm: 'vite-plugin-build-stamp',
  },
  links: {
    github: 'https://github.com/LouieJiang/vite-plugin-build-stamp',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-stamp',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
