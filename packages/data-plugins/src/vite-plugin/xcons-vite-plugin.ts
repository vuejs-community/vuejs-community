import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xcons/vite-plugin',
  description: 'XCon Studio Vite plugin for processing templates, styles and resources with TypeScript support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'xcon-studio/vite-plugin',
    npm: '@xcons/vite-plugin',
  },
  links: {
    github: 'https://github.com/xcon-studio/vite-plugin',
    npm: 'https://www.npmjs.com/package/@xcons/vite-plugin',
    website: 'https://xcon.studio',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 38,
      weekly: 8,
    },
  },
})
