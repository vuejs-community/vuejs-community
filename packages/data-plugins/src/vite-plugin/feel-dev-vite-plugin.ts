import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@feel-dev/vite-plugin',
  description: 'Alt + right-click any UI element to see the full stack behind it: component → frontend code → API → backend handler → SQL → tables.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'devtools',
    'tracing',
    'debugging',
  ],
  links: {
    github: 'https://github.com/Nirbhay71/Feel-your-project',
    npm: 'https://www.npmjs.com/package/@feel-dev/vite-plugin',
    website: 'https://github.com/Nirbhay71/Feel-your-project#readme',
  },
  source: {
    github: 'Nirbhay71/Feel-your-project',
    npm: '@feel-dev/vite-plugin',
  },
})
