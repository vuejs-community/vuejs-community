import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-add-banner',
  description: 'A Rollup plugin that adds banner comments to the output bundle.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'banner',
    'header',
    'comment',
    'license',
    'prepend',
    'sourcemap',
    'bundler',
    'vite',
    'typescript',
  ],
  source: {
    github: 'saqqdy/rollup-plugin-add-banner',
    npm: 'rollup-plugin-add-banner',
  },
  links: {
    github: 'https://github.com/saqqdy/rollup-plugin-add-banner',
    npm: 'https://www.npmjs.com/package/rollup-plugin-add-banner',
    website: 'https://github.com/saqqdy/rollup-plugin-add-banner#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 73,
      weekly: 5,
    },
  },
})
