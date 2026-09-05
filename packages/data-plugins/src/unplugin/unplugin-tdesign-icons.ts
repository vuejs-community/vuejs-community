import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-tdesign-icons',
  description: 'An unplugin for on-demand importing TDesign icons (vue / vue-next / react / web-components). Auto rewrites `import { XxxIcon } from \'tdesign-icons-xxx\'` to the exact icon module, avoiding bundling all 2000+ icons.',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'tdesign',
    'tdesign-icons',
    'icons',
    'vite',
    'webpack',
    'rollup',
    'vue',
    'react',
    'web-components',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/liweijie0812/unplugin-tdesign-icons',
    npm: 'https://www.npmjs.com/package/unplugin-tdesign-icons',
  },
  stats: {
    downloads: {
      monthly: 1137,
      weekly: 196,
    },
  },
})
