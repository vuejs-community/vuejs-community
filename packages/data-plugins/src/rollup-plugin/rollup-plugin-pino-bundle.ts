import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pino-bundle',
  description: 'Rollup plugin for bundling PinoJS logger with transports',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'pino',
    'bundle',
    'pino-rollup',
    'rollup-plugin-pino-bundle',
    'logger',
    'logging',
    'pino-transport',
  ],
  links: {
    github: 'https://github.com/soul2eat/rollup-plugin-pino-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pino-bundle',
    website: 'https://github.com/soul2eat/rollup-plugin-pino-bundle',
  },
  source: {
    github: 'soul2eat/rollup-plugin-pino-bundle',
    npm: 'rollup-plugin-pino-bundle',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 121,
      weekly: 47,
    },
  },
})
