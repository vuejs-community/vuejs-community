import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ue-webui-bridge-vite',
  description: 'Vite plugin for UE WebUI Bridge - Automatically integrate UE WebUI bridge functionality at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'unreal-engine',
    'ue',
    'webui',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/ue-webui-bridge-vite',
  },
  source: {
    npm: 'ue-webui-bridge-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
