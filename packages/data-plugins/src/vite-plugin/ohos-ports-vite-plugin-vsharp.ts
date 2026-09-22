import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ohos-ports/vite-plugin-vsharp',
  description: 'A Vite plugin that compresses static images after each builds by using sharp.js (HarmonyOS port)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sharp.js',
    'harmonyos',
    'ohos-ports',
  ],
  links: {
    github: 'https://github.com/ohos-ports/ohos-ports',
    npm: 'https://www.npmjs.com/package/@ohos-ports/vite-plugin-vsharp',
    website: 'https://github.com/ohos-ports/ohos-ports#readme',
  },
  source: {
    github: 'ohos-ports/ohos-ports',
    npm: '@ohos-ports/vite-plugin-vsharp',
  },
})
