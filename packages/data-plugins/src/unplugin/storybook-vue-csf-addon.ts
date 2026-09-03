import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'storybook-vue-csf-addon',
  description: 'A Storybook Addon to write Storybook\'s stories using Vue SFC syntax and automatically convert them to Storybook CSF',
  version: '0.0.1-beta.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'storybook',
    'vue',
    'vue3',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/floroz/storybook-vue-csf-addon',
    npm: 'https://www.npmjs.com/package/storybook-vue-csf-addon',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 1,
    },
  },
})
