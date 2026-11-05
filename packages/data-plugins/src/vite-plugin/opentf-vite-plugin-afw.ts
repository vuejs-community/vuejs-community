import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@opentf/vite-plugin-afw',
  description: 'Compile AFW components and serve file-based routes in Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'afw',
    'opentf',
    'vite',
    'vite-plugin',
    'jsx',
    'web-components',
  ],
  links: {
    github: 'https://github.com/Open-Tech-Foundation/afw',
    npm: 'https://www.npmjs.com/package/@opentf/vite-plugin-afw',
    website: 'https://afw.opentechf.org/docs',
  },
  source: {
    github: 'Open-Tech-Foundation/afw',
    npm: '@opentf/vite-plugin-afw',
  },
})
