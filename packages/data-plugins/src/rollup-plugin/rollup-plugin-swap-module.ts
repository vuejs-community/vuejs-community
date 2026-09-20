import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-swap-module',
  description: 'A rollup plugin to swap a module for another',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mendlero/rollup-vite-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-swap-module',
    website: 'https://github.com/mendlero/rollup-vite-plugins#readme',
  },
  source: {
    github: 'mendlero/rollup-vite-plugins',
    npm: 'rollup-plugin-swap-module',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
