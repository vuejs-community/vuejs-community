import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pino-bundle',
  description: 'Rollup plugin for bundling PinoJS logger with transports',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
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
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'soul2eat/rollup-plugin-pino-bundle',
    npm: 'rollup-plugin-pino-bundle',
  },
  links: {
    github: 'https://github.com/soul2eat/rollup-plugin-pino-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pino-bundle',
  },
  stats: {
    downloads: {
      monthly: 171,
      weekly: 29,
    },
  },
})
