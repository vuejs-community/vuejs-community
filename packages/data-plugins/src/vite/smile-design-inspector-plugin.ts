import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@smile-design/inspector-plugin',
  description: 'Vite plugin + browser runtime for smile-design DOM Inspector — injects data-smile-src into JSX and auto-installs the inspector runtime in dev preview iframes.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'smile-design',
    'inspector',
    'dom-inspector',
    'ai-design',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/smilezyl2023/smile-design',
    npm: 'https://www.npmjs.com/package/@smile-design/inspector-plugin',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
