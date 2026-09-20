import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-napi-image',
  description: 'Rollup plugin for optimizing images powered by @napi-rs/image',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'image',
    'rollup-plugin',
    'rollup',
    'vite',
    'vite-compatible',
    'compression',
    'lossless',
    'jpg',
    'jpeg',
  ],
  links: {
    github: 'https://github.com/cijiugechu/rollup-plugin-napi-image',
    npm: 'https://www.npmjs.com/package/rollup-plugin-napi-image',
    website: 'https://github.com/cijiugechu/rollup-plugin-napi-image#readme',
  },
  source: {
    github: 'cijiugechu/rollup-plugin-napi-image',
    npm: 'rollup-plugin-napi-image',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 88,
      weekly: 43,
    },
  },
})
