import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@openelement/compiler',
  description: 'Build-time compiler for OpenElement: transforms TSX with @element decorators into Part Program modules.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'openelement',
    'web-components',
    'compiler',
    'tsx',
    'vite',
    'vite-plugin',
    'part-program',
  ],
  links: {
    github: 'https://github.com/open-element/openelement',
    npm: 'https://www.npmjs.com/package/@openelement/compiler',
    website: 'https://openelement.org',
  },
  source: {
    github: 'open-element/openelement',
    npm: '@openelement/compiler',
  },
})
