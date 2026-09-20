import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@samva/vite',
  description: 'Unified Vite editor for Samva email, SMS, and WhatsApp templates',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'email',
    'samva',
    'sml',
    'sms',
    'tsx',
    'vite',
    'vite-plugin',
    'whatsapp',
  ],
  links: {
    github: 'https://github.com/AryaLabsHQ/samva',
    npm: 'https://www.npmjs.com/package/@samva/vite',
    website: 'https://samva.dev',
  },
  source: {
    github: 'AryaLabsHQ/samva',
    npm: '@samva/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 687,
      weekly: 465,
    },
  },
})
