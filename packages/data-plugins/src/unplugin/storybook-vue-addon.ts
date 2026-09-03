import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'storybook-vue-addon',
  description: 'Storybook stories in native Vue format',
  version: '0.7.1',
  category: 'plugin',
  tags: [
    'storybook',
    'storybook-addon',
    'unplugin',
    'vite',
    'vue',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/tobiasdiez/storybook-vue-addon',
    npm: 'https://www.npmjs.com/package/storybook-vue-addon',
  },
  stats: {
    downloads: {
      monthly: 4896,
      weekly: 1594,
    },
  },
})
