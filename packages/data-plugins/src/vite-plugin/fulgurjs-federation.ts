import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fulgurjs/federation',
  description: 'Vite Module Federation for Vue and React: remote modules, shared dependencies and app bridges.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'module-federation',
    'federation',
    'micro-frontend',
    'vite-plugin',
    'webpack-federation',
  ],
  links: {
    github: 'https://github.com/chenmingye/fulgurjs-federation',
    npm: 'https://www.npmjs.com/package/@fulgurjs/federation',
    website: 'https://github.com/chenmingye/fulgurjs-federation#readme',
  },
  source: {
    github: 'chenmingye/fulgurjs-federation',
    npm: '@fulgurjs/federation',
  },
})
