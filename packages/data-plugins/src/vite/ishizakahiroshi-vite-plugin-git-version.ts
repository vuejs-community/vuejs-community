import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ishizakahiroshi/vite-plugin-git-version',
  description: 'Resolve app version from git tags (git describe --tags --match v*) and inject it into Vite builds as __APP_VERSION__.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'git',
    'git-describe',
    'app-version',
    'release',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ishizakahiroshi/vite-plugin-git-version',
    npm: 'https://www.npmjs.com/package/@ishizakahiroshi/vite-plugin-git-version',
  },
  stats: {
    downloads: {
      monthly: 97,
      weekly: 14,
    },
  },
})
