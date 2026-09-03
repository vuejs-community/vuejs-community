import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xcons/vite-plugin',
  description: 'XCon Studio Vite plugin for processing templates, styles and resources with TypeScript support',
  version: '3.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'xcons',
    'xcon',
    'xcon-studio',
    'template',
    'widget',
    'typescript',
    'minification',
    'resource-processing',
    'style-processing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xcon-studio/vite-plugin',
    npm: 'https://www.npmjs.com/package/@xcons/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 17,
    },
  },
})
