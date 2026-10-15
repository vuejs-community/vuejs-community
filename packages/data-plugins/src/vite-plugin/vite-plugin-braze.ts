import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-braze',
  description: 'Preview and snapshot-test Braze Liquid templates with Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'braze',
    'email',
    'liquid',
    'snapshot',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cbcruk/braze-x',
    npm: 'https://www.npmjs.com/package/vite-plugin-braze',
    website: 'https://github.com/cbcruk/braze-x#readme',
  },
  source: {
    github: 'cbcruk/braze-x',
    npm: 'vite-plugin-braze',
  },
})
