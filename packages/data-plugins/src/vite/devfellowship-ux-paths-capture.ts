import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@devfellowship/ux-paths-capture',
  description: 'The DFL UX Paths capture producer: a build-time data-source stamp, a deterministic browser, and the walk that turns a rendered screen into the regions.json that @devfellowship/ux-paths-spec describes.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'dfl',
    'ux-paths',
    'screenshot',
    'regions',
    'vite-plugin',
    'playwright',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/devfellowship/dfl-ux-paths',
    npm: 'https://www.npmjs.com/package/@devfellowship/ux-paths-capture',
  },
  stats: {
    downloads: {
      monthly: 624,
      weekly: 181,
    },
  },
})
