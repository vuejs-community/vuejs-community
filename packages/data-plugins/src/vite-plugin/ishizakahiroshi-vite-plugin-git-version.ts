import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ishizakahiroshi/vite-plugin-git-version',
  description: 'Resolve app version from git tags (git describe --tags --match v*) and inject it into Vite builds as __APP_VERSION__.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'git',
    'git-describe',
    'app-version',
    'release',
  ],
  links: {
    github: 'https://github.com/ishizakahiroshi/vite-plugin-git-version',
    npm: 'https://www.npmjs.com/package/@ishizakahiroshi/vite-plugin-git-version',
    website: 'https://github.com/ishizakahiroshi/vite-plugin-git-version#readme',
  },
  source: {
    github: 'ishizakahiroshi/vite-plugin-git-version',
    npm: '@ishizakahiroshi/vite-plugin-git-version',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 61,
      weekly: 23,
    },
  },
})
