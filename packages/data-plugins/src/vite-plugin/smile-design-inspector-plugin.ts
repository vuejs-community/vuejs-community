import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@smile-design/inspector-plugin',
  description: 'Vite plugin + browser runtime for smile-design DOM Inspector — injects data-smile-src into JSX and auto-installs the inspector runtime in dev preview iframes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'smile-design',
    'inspector',
    'dom-inspector',
    'ai-design',
  ],
  links: {
    github: 'https://github.com/smilezyl2023/smile-design',
    npm: 'https://www.npmjs.com/package/@smile-design/inspector-plugin',
    website: 'https://github.com/smilezyl2023/smile-design',
  },
  source: {
    github: 'smilezyl2023/smile-design',
    npm: '@smile-design/inspector-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
