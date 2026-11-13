import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@adhil28/gitvault',
  description: 'Load your GitVault secrets into process.env at startup. No .env files in the project.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'secrets',
    'env',
    'dotenv',
    'environment-variables',
    'gitvault',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/adhil72/gitvault',
    npm: 'https://www.npmjs.com/package/@adhil28/gitvault',
    website: 'https://github.com/adhil72/gitvault-website',
  },
  source: {
    github: 'adhil72/gitvault',
    npm: '@adhil28/gitvault',
  },
})
