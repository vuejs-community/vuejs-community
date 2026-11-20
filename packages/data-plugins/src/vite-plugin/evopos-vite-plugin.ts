import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@evopos/vite-plugin',
  description: 'Vite plugin for EvoPOS plugin developers: multi-page build, manifest.json checks, fake kassa at /__evopos/, sandbox dev mode',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'evopos',
    'pos',
    'plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@evopos/vite-plugin',
    website: 'https://developers.evopos.az',
  },
  source: {
    npm: '@evopos/vite-plugin',
  },
})
