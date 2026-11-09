import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'zapwebp-vite',
  description: 'Official first-party Vite plugin for Zapwebp - zero-config image and vector asset conversion with transparency safety, retina multipliers, and modern picture markup.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zapwebp',
    'webp',
    'svg',
    'image-optimization',
    'transparency',
  ],
  links: {
    github: 'https://github.com/Zapwebp/vite',
    npm: 'https://www.npmjs.com/package/zapwebp-vite',
    website: 'https://zapwebp.vercel.app',
  },
  source: {
    github: 'Zapwebp/vite',
    npm: 'zapwebp-vite',
  },
})
