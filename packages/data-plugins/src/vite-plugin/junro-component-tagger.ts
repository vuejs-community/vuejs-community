import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@junro/component-tagger',
  description: 'Vite plugin that tags JSX elements with data-dev-* attributes (source path, line, enclosing component) so Junro\'s web plugin can point a report at the right file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'jsx',
    'tsx',
    'component-tagging',
    'debugging',
    'development-tools',
    'devtools',
    'testing',
    'e2e',
    'playwright',
    'cypress',
    'component-tracking',
    'customizable',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@junro/component-tagger',
    website: 'https://junro.dev/docs/web-plugin/element-tagging',
  },
  source: {
    npm: '@junro/component-tagger',
  },
})
