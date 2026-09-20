import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lambda-script/vite-plugin-worktree-hmr',
  description: 'Vite plugin fixing HMR when the project root lives under a hardcoded-ignored path like .git/worktree/feature-*',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'git-worktree',
    'worktree',
    'chokidar',
    'dev-server',
  ],
  links: {
    github: 'https://github.com/lambda-script/vite-plugin-worktree-hmr',
    npm: 'https://www.npmjs.com/package/@lambda-script/vite-plugin-worktree-hmr',
    website: 'https://github.com/lambda-script/vite-plugin-worktree-hmr',
  },
  source: {
    github: 'lambda-script/vite-plugin-worktree-hmr',
    npm: '@lambda-script/vite-plugin-worktree-hmr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
