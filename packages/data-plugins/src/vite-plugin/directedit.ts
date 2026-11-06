import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'directedit',
  description: 'Edit the copy of your running site in the browser and write it back to source. Works on localhost and on preview deploys. Vite plugin + Astro integration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'astro-integration',
    'copy',
    'contenteditable',
    'designMode',
    'ai',
    'agent',
  ],
  links: {
    github: 'https://github.com/spencerc99/directedit',
    npm: 'https://www.npmjs.com/package/directedit',
    website: 'https://github.com/spencerc99/directedit#readme',
  },
  source: {
    github: 'spencerc99/directedit',
    npm: 'directedit',
  },
})
