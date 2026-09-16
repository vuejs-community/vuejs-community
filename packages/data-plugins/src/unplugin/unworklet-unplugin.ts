import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unworklet/unplugin',
  description: 'Vite plugin for `@unworklet/core` processors (`?worklet` imports, source maps, DevTools panels, analysis JSON).',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'audio',
    'audioworklet',
    'dsp',
    'unplugin',
    'vite',
    'webassembly',
    'worklet',
  ],
  source: {
    github: 'yuichkun/unworklet',
    npm: '@unworklet/unplugin',
  },
  links: {
    github: 'https://github.com/yuichkun/unworklet',
    npm: 'https://www.npmjs.com/package/@unworklet/unplugin',
    website: 'https://github.com/yuichkun/unworklet#readme',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 207,
      weekly: 6,
    },
  },
})
