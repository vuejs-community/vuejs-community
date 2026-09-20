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
    github: 'https://github.com/stealth-scale/config',
    npm: 'https://www.npmjs.com/package/@stealthscale/vite-plugin-i18n',
    website: 'https://github.com/stealth-scale/config/tree/main/packages/vite-plugin-i18n#readme',
  },
  source: {
    github: 'stealth-scale/config',
    npm: '@stealthscale/vite-plugin-i18n',
  },
})
