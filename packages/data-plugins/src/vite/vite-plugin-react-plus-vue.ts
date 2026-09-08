import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-plus-vue',
  description: 'A vite plugin to enable some vue features in react',
  icon: 'logos:vite-icon',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'react',
    'vue',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'mendlero/rollup-vite-plugins',
    npm: 'vite-plugin-react-plus-vue',
  },
  links: {
    github: 'https://github.com/mendlero/rollup-vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-plus-vue',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
