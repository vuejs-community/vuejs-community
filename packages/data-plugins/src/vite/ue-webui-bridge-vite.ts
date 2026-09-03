import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ue-webui-bridge-vite',
  description: 'Vite plugin for UE WebUI Bridge - Automatically integrate UE WebUI bridge functionality at build time',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'unreal-engine',
    'ue',
    'webui',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/ue-webui-bridge-vite',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
