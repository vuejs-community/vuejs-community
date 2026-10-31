import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ugrc/vite-plugin-google-secrets',
  description: 'Load Google Cloud Secret Manager values into the environment during Vite config.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ugrc',
    'vite',
    'vite-plugin',
    'google-cloud',
    'secret-manager',
  ],
  links: {
    github: 'https://github.com/agrc/kitchen-sink',
    npm: 'https://www.npmjs.com/package/@ugrc/vite-plugin-google-secrets',
    website: 'https://github.com/agrc/kitchen-sink/tree/main/packages/vite-plugin-google-secrets',
  },
  source: {
    github: 'agrc/kitchen-sink',
    npm: '@ugrc/vite-plugin-google-secrets',
  },
})
