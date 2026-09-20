import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-encrypted-html',
  description: 'Vite plugin that encrypts your built HTML with AES-256-GCM and fronts it with a decoy page',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'encryption',
    'aes-gcm',
    'single-file',
    'html',
  ],
  links: {
    github: 'https://github.com/waerhert/vite-plugin-encrypted-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-encrypted-html',
    website: 'https://github.com/waerhert/vite-plugin-encrypted-html#readme',
  },
  source: {
    github: 'waerhert/vite-plugin-encrypted-html',
    npm: 'vite-plugin-encrypted-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 162,
      weekly: 8,
    },
  },
})
