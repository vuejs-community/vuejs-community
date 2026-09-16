import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-require-esm',
  description: 'An interesting Unplugin that does its best to make your code run only in an ES Modules.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'typescript',
  ],
  source: {
    github: 'err-require-esm/unplugin-require-esm',
    npm: 'unplugin-require-esm',
  },
  links: {
    github: 'https://github.com/err-require-esm/unplugin-require-esm',
    npm: 'https://www.npmjs.com/package/unplugin-require-esm',
    website: 'https://github.com/err-require-esm/unplugin-require-esm',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
