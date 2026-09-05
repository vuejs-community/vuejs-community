import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-git-info',
  description: 'Unplugin for automatically generating Git information (repo, branch, commit, etc.) in multiple output formats.',
  version: '2.0.8',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'rolldown',
    'esbuild',
    'farm',
    'git',
    'git-info',
    'build-info',
    'version-info',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/Drswith/unplugin-auto-git-info',
    npm: 'https://www.npmjs.com/package/unplugin-auto-git-info',
  },
  stats: {
    downloads: {
      monthly: 68,
      weekly: 8,
    },
  },
})
