import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-detect-duplicated-deps',
  description: 'Detect duplicate packaged dependencies',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'duplicated',
    'repeat',
    'dependencies',
  ],
  links: {
    github: 'https://github.com/tjx666/unplugin-detect-duplicated-deps',
    npm: 'https://www.npmjs.com/package/unplugin-detect-duplicated-deps',
    website: 'https://github.com/tjx666/unplugin-detect-duplicated-deps#readme',
  },
  source: {
    github: 'tjx666/unplugin-detect-duplicated-deps',
    npm: 'unplugin-detect-duplicated-deps',
  },
  stats: {
    stars: 82,
    downloads: {
      monthly: 664,
      weekly: 129,
    },
  },
})
