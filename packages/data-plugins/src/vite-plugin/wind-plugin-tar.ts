import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wind-plugin-tar',
  description: 'Tar the result files after building',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'vue',
    'tar',
  ],
  source: {
    github: 'WindWilliam/wind-plugin-tar',
    npm: 'wind-plugin-tar',
  },
  links: {
    github: 'https://github.com/WindWilliam/wind-plugin-tar',
    npm: 'https://www.npmjs.com/package/wind-plugin-tar',
    website: 'https://github.com/WindWilliam/wind-plugin-tar#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
