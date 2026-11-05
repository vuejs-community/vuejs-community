import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ohos-ports/vite-plugin-image-optimizer',
  description: 'A Vite plugin to optimize your image assets using Sharp.js and SVGO',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'image compression',
    'image optimization',
    'svgo',
    'sharp.js',
  ],
  links: {
    github: 'https://github.com/ohos-ports/ohos-ports',
    npm: 'https://www.npmjs.com/package/@ohos-ports/vite-plugin-image-optimizer',
    website: 'https://github.com/ohos-ports/ohos-ports/tree/main/ports/vite-plugin-image-optimizer/2.0.3#readme',
  },
  source: {
    github: 'ohos-ports/ohos-ports',
    npm: '@ohos-ports/vite-plugin-image-optimizer',
  },
})
