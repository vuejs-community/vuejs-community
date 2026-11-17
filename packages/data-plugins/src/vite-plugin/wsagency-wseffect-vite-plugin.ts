import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wsagency/wseffect-vite-plugin',
  description: 'Vite plugin for Foldkit with state-preserving live reload',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'foldkit',
    'live-reload',
    'state-preservation',
  ],
  links: {
    github: 'https://github.com/wsagency/wseffect',
    npm: 'https://www.npmjs.com/package/@wsagency/wseffect-vite-plugin',
    website: 'https://wseffect.com',
  },
  source: {
    github: 'wsagency/wseffect',
    npm: '@wsagency/wseffect-vite-plugin',
  },
})
