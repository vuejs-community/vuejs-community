import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'lazy-encrypt',
  description: 'Password-encrypt a lazily-loaded React route at build time with Vite. The plaintext source never ships — only an AES-GCM blob, decrypted in the browser after the correct password.',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'encryption',
    'aes-gcm',
    'pbkdf2',
    'lazy',
    'code-splitting',
    'webcrypto',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Dvdplate/vite-lazy-encrypt',
    npm: 'https://www.npmjs.com/package/lazy-encrypt',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
