import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'interstage',
  description: 'Import WGSL into TypeScript as typed TypeGPU modules. A TypeScript 7.1 content mapper and a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'wgsl',
    'webgpu',
    'typegpu',
    'typescript',
    'content-mapper',
    'vite-plugin',
    'shader',
  ],
  links: {
    github: 'https://github.com/HaukeSchnau/interstage',
    npm: 'https://www.npmjs.com/package/interstage',
    website: 'https://interstage.schnau.dev',
  },
  source: {
    github: 'HaukeSchnau/interstage',
    npm: 'interstage',
  },
})
