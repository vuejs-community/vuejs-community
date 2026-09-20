import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-faust',
  description: 'Vite plugin to transform Faust .dsp files into importable js/wasm modules',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'faust',
    'webaudio',
  ],
  links: {
    github: 'https://github.com/mrkev/pkg',
    npm: 'https://www.npmjs.com/package/vite-plugin-faust',
    website: 'https://aykev.dev/pkg/vite-plugin-faust',
  },
  source: {
    github: 'mrkev/pkg',
    npm: 'vite-plugin-faust',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 3,
    },
  },
})
