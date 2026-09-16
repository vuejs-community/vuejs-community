import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'acture-build-tier',
  description: 'Build-time tier mirror. Scans .ts source for @stable / @experimental / @internal / @deprecated JSDoc tags on defineCommand calls and mirrors them into the runtime command\'s tier metadata. Ships an esbuild plugin and a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'thorwhalen/acture',
    npm: 'acture-build-tier',
  },
  links: {
    github: 'https://github.com/thorwhalen/acture',
    npm: 'https://www.npmjs.com/package/acture-build-tier',
    website: 'https://github.com/thorwhalen/acture#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
