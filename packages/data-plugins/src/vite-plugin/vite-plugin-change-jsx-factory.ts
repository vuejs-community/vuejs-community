import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-change-jsx-factory',
  description: 'A vite plugin to change the jsx factory',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'mendlero/rollup-vite-plugins',
    npm: 'vite-plugin-change-jsx-factory',
  },
  links: {
    github: 'https://github.com/mendlero/rollup-vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-change-jsx-factory',
    website: 'https://github.com/mendlero/rollup-vite-plugins#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
