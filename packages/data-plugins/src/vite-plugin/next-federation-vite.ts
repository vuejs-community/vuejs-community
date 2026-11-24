import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@next-federation/vite',
  description: 'Vite plugins that build next-federation island remotes and Module Federation 2.0 remote components remotes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nextjs',
    'next.js',
    'micro-frontends',
    'microfrontends',
    'module-federation',
    'react-server-components',
    'rsc',
    'app-router',
    'islands',
    'vite',
    'vite-plugin',
    'vite-plugin-rsc',
  ],
  links: {
    github: 'https://github.com/tariqule/next-federation',
    npm: 'https://www.npmjs.com/package/@next-federation/vite',
    website: 'https://next-federation-docs.vercel.app/docs/api/vite',
  },
  source: {
    github: 'tariqule/next-federation',
    npm: '@next-federation/vite',
  },
})
