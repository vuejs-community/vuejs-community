import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@orbit-work/vite-plugin-private-deployment',
  description: 'Opt-in Vite plugin for public runtime configuration in private deployments',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'private-deployment',
    'runtime-config',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@orbit-work/vite-plugin-private-deployment',
  },
  source: {
    npm: '@orbit-work/vite-plugin-private-deployment',
  },
})
