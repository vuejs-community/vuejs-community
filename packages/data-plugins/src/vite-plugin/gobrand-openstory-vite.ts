import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gobrand/openstory-vite',
  description: 'Vite plugin that serves the OpenStory preview harness for a project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'component-preview',
    'openstory',
    'preview',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/go-brand/openstory',
    npm: 'https://www.npmjs.com/package/@gobrand/openstory-vite',
    website: 'https://github.com/go-brand/openstory#readme',
  },
  source: {
    github: 'go-brand/openstory',
    npm: '@gobrand/openstory-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 38,
      weekly: 1,
    },
  },
})
