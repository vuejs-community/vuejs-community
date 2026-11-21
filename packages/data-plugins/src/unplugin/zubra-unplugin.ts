import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zubra/unplugin',
  description: 'Compile .zb components in Vite, Rollup, webpack, esbuild and Rspack, with React and Vue wrappers picked automatically',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'zubra',
    'web components',
    'custom elements',
    'vite',
    'rollup',
    'webpack',
    'esbuild',
    'unplugin',
    'astro',
  ],
  links: {
    github: 'https://github.com/zubra-js/zubra',
    npm: 'https://www.npmjs.com/package/@zubra/unplugin',
    website: 'https://github.com/zubra-js/zubra/tree/main/plugin#readme',
  },
  source: {
    github: 'zubra-js/zubra',
    npm: '@zubra/unplugin',
  },
})
