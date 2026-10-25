import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cyclone-ui/vite',
  description: 'A Vite plugin that sets up Tamagui and Cyclone UI components in Vite applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cyclone-ui',
    'tamagui',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/storm-software/cyclone-ui',
    npm: 'https://www.npmjs.com/package/@cyclone-ui/vite',
    website: 'https://github.com/storm-software/cyclone-ui#readme',
  },
  source: {
    github: 'storm-software/cyclone-ui',
    npm: '@cyclone-ui/vite',
  },
})
