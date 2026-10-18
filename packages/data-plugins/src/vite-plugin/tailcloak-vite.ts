import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tailcloak/vite',
  description: 'Vite plugin that obfuscates Tailwind CSS v4 class names in production builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'obfuscate',
    'tailcloak',
    'tailwind',
    'tailwindcss',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/klynglabs/tailcloak',
    npm: 'https://www.npmjs.com/package/@tailcloak/vite',
    website: 'https://github.com/klynglabs/tailcloak/tree/main/packages/vite#readme',
  },
  source: {
    github: 'klynglabs/tailcloak',
    npm: '@tailcloak/vite',
  },
})
