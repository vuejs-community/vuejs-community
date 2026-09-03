import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gobrand/openstory-vite',
  description: 'Vite plugin that serves the OpenStory preview harness for a project',
  version: '0.6.4',
  category: 'plugin',
  tags: [
    'component-preview',
    'openstory',
    'preview',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/go-brand/openstory',
    npm: 'https://www.npmjs.com/package/@gobrand/openstory-vite',
  },
  stats: {
    downloads: {
      monthly: 52,
      weekly: 7,
    },
  },
})
