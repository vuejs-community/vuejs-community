import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vinicius73/rollup-plugin-skypack-resolver',
  description: 'Generate the bundle of your project using Skypack CDN for external dependencies.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'skypack',
    'skypack-cdn',
    'pika',
    'pika-cdn',
    'cdn',
  ],
  source: {
    github: 'vinicius73/rollup-plugin-pika-resolver',
    npm: '@vinicius73/rollup-plugin-skypack-resolver',
  },
  links: {
    github: 'https://github.com/vinicius73/rollup-plugin-pika-resolver',
    npm: 'https://www.npmjs.com/package/@vinicius73/rollup-plugin-skypack-resolver',
    website: 'https://github.com/vinicius73/rollup-plugin-pika-resolver#readme',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 49,
      weekly: 8,
    },
  },
})
