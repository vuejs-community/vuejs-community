import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stealthscale/vite-plugin-theme',
  description: 'Generates the styling runtime of a design system and compiles the stylesheet of an application.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'design-system',
    'pandacss',
    'theme',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stealth-scale/config',
    npm: 'https://www.npmjs.com/package/@stealthscale/vite-plugin-theme',
    website: 'https://github.com/stealth-scale/config/tree/main/packages/vite-plugin-theme#readme',
  },
  source: {
    github: 'stealth-scale/config',
    npm: '@stealthscale/vite-plugin-theme',
  },
})
