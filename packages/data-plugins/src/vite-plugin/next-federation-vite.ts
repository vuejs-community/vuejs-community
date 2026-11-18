import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@next-federation/vite',
  description: 'Vite plugin that builds a next-federation island remote on top of @vitejs/plugin-rsc.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'module-federation',
    'nextjs',
    'react-server-components',
    'micro-frontends',
    'islands',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tariqule/next-federation',
    npm: 'https://www.npmjs.com/package/@next-federation/vite',
    website: 'https://github.com/tariqule/next-federation#readme',
  },
  source: {
    github: 'tariqule/next-federation',
    npm: '@next-federation/vite',
  },
})
