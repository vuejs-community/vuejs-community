import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-crypto',
  description: 'Vite plugin for build-time AES-GCM encryption of strings and assets with runtime decryption',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'crypto',
    'encryption',
    'aes',
    'aes-gcm',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-crypto',
  },
  source: {
    npm: 'vite-plugin-crypto',
  },
})
