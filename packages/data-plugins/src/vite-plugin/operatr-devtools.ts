import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'operatr-devtools',
  description: 'Embeddable Operator DevTools overlay — floating chat linked to the task\'s agent session, element picker, and page instrumentation (network/console/errors).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'operator',
    'devtools',
    'overlay',
    'vite-plugin',
    'agent',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/operatr-devtools',
  },
  source: {
    npm: 'operatr-devtools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 86,
      weekly: 4,
    },
  },
})
