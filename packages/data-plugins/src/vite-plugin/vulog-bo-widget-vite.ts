import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vulog/bo-widget-vite',
  description: 'Vite plugin to build Vulog back office widgets: widget.json, bundle layout and a fake back office in dev.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vulog',
    'back-office',
    'widget',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Vu-Log/bo-widget-sdk',
    npm: 'https://www.npmjs.com/package/@vulog/bo-widget-vite',
    website: 'https://github.com/Vu-Log/bo-widget-sdk/tree/main/packages/bo-widget-vite#readme',
  },
  source: {
    github: 'Vu-Log/bo-widget-sdk',
    npm: '@vulog/bo-widget-vite',
  },
})
