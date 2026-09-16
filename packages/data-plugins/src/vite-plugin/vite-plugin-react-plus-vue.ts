import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-plus-vue',
  description: 'A vite plugin to enable some vue features in react',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'react',
    'vue',
  ],
  source: {
    github: 'mendlero/rollup-vite-plugins',
    npm: 'vite-plugin-react-plus-vue',
  },
  links: {
    github: 'https://github.com/mendlero/rollup-vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-plus-vue',
    website: 'https://github.com/mendlero/rollup-vite-plugins#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
