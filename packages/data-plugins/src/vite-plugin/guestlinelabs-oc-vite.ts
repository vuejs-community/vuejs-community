import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@guestlinelabs/oc-vite',
  description: 'OpenComponents Vite plugin and runtime (Bun fork)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'opencomponents',
    'oc',
    'micro-frontends',
    'vite',
    'vite-plugin',
    'bun',
  ],
  links: {
    github: 'https://github.com/guestlinelabs/oc',
    npm: 'https://www.npmjs.com/package/@guestlinelabs/oc-vite',
    website: 'https://github.com/guestlinelabs/oc/tree/main/packages/vite#readme',
  },
  source: {
    github: 'guestlinelabs/oc',
    npm: '@guestlinelabs/oc-vite',
  },
})
