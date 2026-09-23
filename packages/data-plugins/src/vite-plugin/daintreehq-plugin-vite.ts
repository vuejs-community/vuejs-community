import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@daintreehq/plugin-vite',
  description: 'Vite externals preset for Daintree plugins. Externalizes React and React DOM so plugin bundles resolve to the host\'s single React instance via the host import map.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'daintree',
    'daintree-plugin',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/daintreehq/daintree',
    npm: 'https://www.npmjs.com/package/@daintreehq/plugin-vite',
    website: 'https://github.com/daintreehq/daintree/tree/develop/docs/plugins',
  },
  source: {
    github: 'daintreehq/daintree',
    npm: '@daintreehq/plugin-vite',
  },
})
