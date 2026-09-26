import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@drift-beacon/plugin',
  description: 'The Drift Beacon plugin SDK: APIs for plugin main code and UIs, the driftBeacon() Vite plugin and the dbplugin CLI',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'drift-beacon',
    'plugin',
    'sdk',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@drift-beacon/plugin',
    website: 'https://driftbeacon.app',
  },
  source: {
    npm: '@drift-beacon/plugin',
  },
})
