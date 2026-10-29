import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plotwork.official/vite',
  description: 'Import Plotwork .diagram files in Vite: drawn to SVG at build time by the Plotwork command line, redrawn on save, with no engine in the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'plotwork',
    'diagram',
    'vite',
    'vite-plugin',
    'svg',
  ],
  links: {
    github: 'https://github.com/plotwork-official/plotwork-sdk',
    npm: 'https://www.npmjs.com/package/@plotwork.official/vite',
    website: 'https://github.com/plotwork-official/plotwork-sdk/tree/main/packages/vite',
  },
  source: {
    github: 'plotwork-official/plotwork-sdk',
    npm: '@plotwork.official/vite',
  },
})
