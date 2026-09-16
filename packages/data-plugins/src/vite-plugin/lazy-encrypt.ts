import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lazy-encrypt',
  description: 'Password-encrypt a lazily-loaded React route at build time with Vite. The plaintext source never ships — only an AES-GCM blob, decrypted in the browser after the correct password.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Dvdplate/vite-lazy-encrypt',
    npm: 'lazy-encrypt',
  },
  links: {
    github: 'https://github.com/Dvdplate/vite-lazy-encrypt',
    npm: 'https://www.npmjs.com/package/lazy-encrypt',
    website: 'https://github.com/Dvdplate/vite-lazy-encrypt#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 8,
    },
  },
})
