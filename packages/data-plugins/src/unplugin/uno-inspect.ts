import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uno-inspect',
  description: 'New UnoCSS inspector.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'unocss',
    'scan',
  ],
  links: {
    github: 'https://github.com/unpreset/uno-inspect',
    npm: 'https://www.npmjs.com/package/uno-inspect',
    website: 'https://github.com/unpreset/uno-inspect#readme',
  },
  source: {
    github: 'unpreset/uno-inspect',
    npm: 'uno-inspect',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
