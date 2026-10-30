import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vkma.dev/devtools',
  description: 'Devtools for VK Mini Apps: /__vkma panel, bridge event timeline, execute',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vk',
    'vkontakte',
    'vk-mini-apps',
    'devtools',
    'vite-plugin',
    'debugging',
    'developer-tools',
  ],
  links: {
    github: 'https://github.com/pajecawav/vkma',
    npm: 'https://www.npmjs.com/package/@vkma.dev/devtools',
    website: 'https://github.com/pajecawav/vkma/tree/master/packages/devtools#readme',
  },
  source: {
    github: 'pajecawav/vkma',
    npm: '@vkma.dev/devtools',
  },
})
