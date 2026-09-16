import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-git-info',
  description: 'Unplugin for automatically generating Git information (repo, branch, commit, etc.) in multiple output formats.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'Drswith/unplugin-auto-git-info',
    npm: 'unplugin-auto-git-info',
  },
  links: {
    github: 'https://github.com/Drswith/unplugin-auto-git-info',
    npm: 'https://www.npmjs.com/package/unplugin-auto-git-info',
    website: 'https://github.com/Drswith/unplugin-auto-git-info#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 26,
      weekly: 1,
    },
  },
})
