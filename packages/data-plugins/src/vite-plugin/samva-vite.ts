import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@samva/vite',
  description: 'Local editor, dev server and build for Samva email, SMS and WhatsApp templates',
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
    github: 'https://github.com/SamvaHQ/SML',
    npm: 'https://www.npmjs.com/package/@samva/vite',
    website: 'https://samva.dev',
  },
  source: {
    github: 'SamvaHQ/SML',
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
