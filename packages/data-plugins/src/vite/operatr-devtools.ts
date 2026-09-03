import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'operatr-devtools',
  description: 'Embeddable Operator DevTools overlay — floating chat linked to the task\'s agent session, element picker, and page instrumentation (network/console/errors).',
  version: '0.16.3',
  category: 'plugin',
  tags: [
    'operator',
    'devtools',
    'overlay',
    'vite-plugin',
    'agent',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/operatr-devtools',
  },
  stats: {
    downloads: {
      monthly: 127,
      weekly: 22,
    },
  },
})
