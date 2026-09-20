import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unused',
  description: 'Check unused dependencies.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  links: {
    github: 'https://github.com/unplugin/unplugin-unused',
    npm: 'https://www.npmjs.com/package/unplugin-unused',
    website: 'https://github.com/unplugin/unplugin-unused#readme',
  },
  source: {
    github: 'unplugin/unplugin-unused',
    npm: 'unplugin-unused',
  },
  stats: {
    stars: 111,
    downloads: {
      monthly: 94088,
      weekly: 18431,
    },
  },
})
