import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@unworklet/unplugin',
  description: 'Vite plugin for `@unworklet/core` processors (`?worklet` imports, source maps, DevTools panels, analysis JSON).',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'audio',
    'audioworklet',
    'dsp',
    'unplugin',
    'vite',
    'webassembly',
    'worklet',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/yuichkun/unworklet',
    npm: 'https://www.npmjs.com/package/@unworklet/unplugin',
  },
  stats: {
    downloads: {
      monthly: 205,
      weekly: 13,
    },
  },
})
