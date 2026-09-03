import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'uno-inspect',
  description: 'New UnoCSS inspector.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'unocss',
    'scan',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/unpreset/uno-inspect',
    npm: 'https://www.npmjs.com/package/uno-inspect',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
