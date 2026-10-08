import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@r00tkids/rollup-plugin-rootsqz',
  description: 'Rollup / Vite plugin that compresses and bundles code and assets into one HTML file with rootsqz.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'rootsqz',
    'compression',
  ],
  links: {
    github: 'https://github.com/r00tkids/rootsqz',
    npm: 'https://www.npmjs.com/package/@r00tkids/rollup-plugin-rootsqz',
    website: 'https://github.com/r00tkids/rootsqz#readme',
  },
  source: {
    github: 'r00tkids/rootsqz',
    npm: '@r00tkids/rollup-plugin-rootsqz',
  },
})
