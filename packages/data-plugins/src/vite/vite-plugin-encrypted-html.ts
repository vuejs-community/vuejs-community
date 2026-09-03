import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-encrypted-html',
  description: 'Vite plugin that encrypts your built HTML with AES-256-GCM and fronts it with a decoy page',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'encryption',
    'aes-gcm',
    'single-file',
    'html',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/waerhert/vite-plugin-encrypted-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-encrypted-html',
  },
  stats: {
    downloads: {
      monthly: 149,
      weekly: 149,
    },
  },
})
