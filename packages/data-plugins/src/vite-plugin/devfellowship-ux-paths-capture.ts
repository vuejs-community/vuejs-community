import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devfellowship/ux-paths-capture',
  description: 'The DFL UX Paths capture producer: a build-time data-source stamp, a deterministic browser, and the walk that turns a rendered screen into the regions.json that @devfellowship/ux-paths-spec describes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dfl',
    'ux-paths',
    'screenshot',
    'regions',
    'vite-plugin',
    'playwright',
  ],
  links: {
    github: 'https://github.com/devfellowship/dfl-ux-paths',
    npm: 'https://www.npmjs.com/package/@devfellowship/ux-paths-capture',
    website: 'https://github.com/devfellowship/dfl-ux-paths#readme',
  },
  source: {
    github: 'devfellowship/dfl-ux-paths',
    npm: '@devfellowship/ux-paths-capture',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 866,
      weekly: 167,
    },
  },
})
