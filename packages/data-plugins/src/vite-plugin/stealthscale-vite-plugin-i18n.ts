import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stealthscale/vite-plugin-i18n',
  description: 'Finds every catalogue an application can reach, types their keys, and answers the module it loads them from.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stealth-scale/scale',
    npm: 'https://www.npmjs.com/package/@stealthscale/vite-plugin-i18n',
    website: 'https://github.com/stealth-scale/scale/tree/main/packages/vite-plugin-i18n#readme',
  },
  source: {
    github: 'stealth-scale/scale',
    npm: '@stealthscale/vite-plugin-i18n',
  },
})
