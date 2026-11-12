import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@maz-ui/vite-plugin',
  description: 'Vite plugins for Maz-UI: purge the CSS of the components and utilities your app does not use',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'maz-ui',
    'purge',
    'css',
    'tree-shaking',
  ],
  links: {
    github: 'https://github.com/LouisMazel/maz-ui',
    npm: 'https://www.npmjs.com/package/@maz-ui/vite-plugin',
    website: 'https://maz-ui.com/ecosystem/vite-plugin',
  },
  source: {
    github: 'LouisMazel/maz-ui',
    npm: '@maz-ui/vite-plugin',
  },
})
