import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lambda-script/vite-plugin-worktree-hmr',
  description: 'Vite plugin fixing HMR when the project root lives under a hardcoded-ignored path like .git/worktree/feature-*',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'git-worktree',
    'worktree',
    'chokidar',
    'dev-server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lambda-script/vite-plugin-worktree-hmr',
    npm: 'https://www.npmjs.com/package/@lambda-script/vite-plugin-worktree-hmr',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 10,
    },
  },
})
