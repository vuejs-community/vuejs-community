import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-clean-build',
  description: 'A Vite plugin that removes matching files and directories after a build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'clean',
    'remove',
    'directory',
    'files',
    'project-clean',
    'directory-removed',
    'vite-plugin-clean',
  ],
  links: {
    github: 'https://github.com/oyjt/vite-plugin-clean-build',
    npm: 'https://www.npmjs.com/package/vite-plugin-clean-build',
    website: 'https://github.com/oyjt/vite-plugin-clean-build',
  },
  source: {
    github: 'oyjt/vite-plugin-clean-build',
    npm: 'vite-plugin-clean-build',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 3310,
      weekly: 586,
    },
  },
})
