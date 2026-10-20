import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pamenv/vite',
  description: 'Vite plugin: load PAM env into process.env before Vite resolves config',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'brain toolkit',
    'pam',
    'pamenv',
    'vite',
    'vite-plugin',
    'dotenv',
  ],
  links: {
    github: 'https://github.com/qlover/brain-toolkit',
    npm: 'https://www.npmjs.com/package/@pamenv/vite',
    website: 'https://pam.qlover.top/docs/cli',
  },
  source: {
    github: 'qlover/brain-toolkit',
    npm: '@pamenv/vite',
  },
})
