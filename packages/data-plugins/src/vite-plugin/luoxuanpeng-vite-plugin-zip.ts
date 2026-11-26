import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@luoxuanpeng/vite-plugin-zip',
  description: 'Vite plugin that zips the dist folder after build (Windows PowerShell / zip CLI).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zip',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@luoxuanpeng/vite-plugin-zip',
  },
  source: {
    npm: '@luoxuanpeng/vite-plugin-zip',
  },
})
