import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tsquid/vite',
  description: 'Vite preset for tsquid apps: StyleX, React and Relay in the right order.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tsquid',
    'vite',
    'vite-plugin',
    'stylex',
    'relay',
  ],
  links: {
    github: 'https://github.com/hsimah-services/tsquid',
    npm: 'https://www.npmjs.com/package/@tsquid/vite',
    website: 'https://github.com/hsimah-services/tsquid/tree/main/packages/vite#readme',
  },
  source: {
    github: 'hsimah-services/tsquid',
    npm: '@tsquid/vite',
  },
})
