import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stealthscale/vite-plugin-specimen',
  description: 'Indexes specimen files from their source, so a catalogue lists every page without loading one.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'catalogue',
    'design-system',
    'specimen',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stealth-scale/scale',
    npm: 'https://www.npmjs.com/package/@stealthscale/vite-plugin-specimen',
    website: 'https://github.com/stealth-scale/scale/tree/main/packages/vite-plugin-specimen#readme',
  },
  source: {
    github: 'stealth-scale/scale',
    npm: '@stealthscale/vite-plugin-specimen',
  },
})
