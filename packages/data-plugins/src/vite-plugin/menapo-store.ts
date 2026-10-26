import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/store',
  description: 'Client state for kit apps: store({ … }) is an object literal, writes are assignments, and useStore re-renders a component only for the keys it read, in every framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'state',
    'store',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/store',
    website: 'https://github.com/menapo/kit/blob/main/packages/store/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/store',
  },
})
