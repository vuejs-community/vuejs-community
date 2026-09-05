import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-faust',
  description: 'Vite plugin to transform Faust .dsp files into importable js/wasm modules',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'faust',
    'webaudio',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mrkev/pkg',
    npm: 'https://www.npmjs.com/package/vite-plugin-faust',
  },
  stats: {
    downloads: {
      monthly: 48,
      weekly: 5,
    },
  },
})
