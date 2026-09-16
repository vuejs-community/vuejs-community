import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-tdesign-icons',
  description: 'An unplugin for on-demand importing TDesign icons (vue / vue-next / react / web-components). Auto rewrites `import { XxxIcon } from \'tdesign-icons-xxx\'` to the exact icon module, avoiding bundling all 2000+ icons.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'liweijie0812/unplugin-tdesign-icons',
    npm: 'unplugin-tdesign-icons',
  },
  links: {
    github: 'https://github.com/liweijie0812/unplugin-tdesign-icons',
    npm: 'https://www.npmjs.com/package/unplugin-tdesign-icons',
    website: 'https://github.com/liweijie0812/unplugin-tdesign-icons#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1215,
      weekly: 66,
    },
  },
})
