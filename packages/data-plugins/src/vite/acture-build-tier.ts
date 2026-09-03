import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'acture-build-tier',
  description: 'Build-time tier mirror. Scans .ts source for @stable / @experimental / @internal / @deprecated JSDoc tags on defineCommand calls and mirrors them into the runtime command\'s tier metadata. Ships an esbuild plugin and a Vite plugin.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'acture',
    'tier-system',
    'jsdoc',
    'esbuild-plugin',
    'vite-plugin',
    'stable',
    'experimental',
    'deprecated',
    'internal',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/thorwhalen/acture',
    npm: 'https://www.npmjs.com/package/acture-build-tier',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
