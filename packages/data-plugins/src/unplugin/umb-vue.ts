import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'umb-vue',
  description: 'Vue.js custom elements integration for Umbraco backoffice',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vue',
    'umbraco',
    'backoffice',
    'custom-elements',
    'web-components',
    'vite',
    'rollup',
    'rolldown',
    'esbuild',
  ],
  source: {
    github: 'JoJk0/umb-vue',
    npm: 'umb-vue',
  },
  links: {
    github: 'https://github.com/JoJk0/umb-vue',
    npm: 'https://www.npmjs.com/package/umb-vue',
    website: 'https://github.com/JoJk0/umb-vue#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
