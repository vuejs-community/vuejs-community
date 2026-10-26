import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/forms',
  description: 'Form state for kit apps: form("PATCH /projects/:id") typed and validated by the app\'s own operation, uncontrolled controls with delegated events, server issues on their fields and accessible parts, read with useForm in every framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'accessibility',
    'forms',
    'standard-schema',
    'validation',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/forms',
    website: 'https://github.com/menapo/kit/blob/main/packages/forms/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/forms',
  },
})
