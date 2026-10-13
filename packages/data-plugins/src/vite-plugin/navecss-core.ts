import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@navecss/core',
  description: 'Nave design system — layer architecture, reset, atomic utilities, and the Vite, PostCSS and Lightning CSS adapters and a command line for the @nave directive',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'design-system',
    'css-layers',
    'atomic-css',
    'postcss-plugin',
    'vite-plugin',
    'lightningcss',
    'zero-runtime',
  ],
  links: {
    github: 'https://github.com/navecss/navecss',
    npm: 'https://www.npmjs.com/package/@navecss/core',
    website: 'https://github.com/navecss/navecss/tree/main/packages/core#readme',
  },
  source: {
    github: 'navecss/navecss',
    npm: '@navecss/core',
  },
})
