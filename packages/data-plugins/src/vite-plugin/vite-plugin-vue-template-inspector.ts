import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-template-inspector',
  description: 'Vite/Webpack plugin: Alt+click Vue template elements to copy the source path or open it in your editor.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
    'vue',
    'inspector',
    'devtools',
  ],
  links: {
    github: 'https://github.com/Leadgq/vite-plugin-vue-template-inspector',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-template-inspector',
    website: 'https://github.com/Leadgq/vite-plugin-vue-template-inspector#readme',
  },
  source: {
    github: 'Leadgq/vite-plugin-vue-template-inspector',
    npm: 'vite-plugin-vue-template-inspector',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 418,
      weekly: 418,
    },
  },
})
