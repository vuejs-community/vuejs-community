import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@binarynoir/vitepress-downloads',
  description: 'A VitePress plugin that publishes the files in a folder named downloads (or any names you choose) so Markdown pages can link to them with a plain relative path.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitepress',
    'vitepress-plugin',
    'vite-plugin',
    'markdown-it-plugin',
    'downloads',
    'attachments',
    'static-files',
    'docs',
  ],
  links: {
    github: 'https://github.com/binarynoir/vitepress-downloads',
    npm: 'https://www.npmjs.com/package/@binarynoir/vitepress-downloads',
    website: 'https://github.com/binarynoir/vitepress-downloads#readme',
  },
  source: {
    github: 'binarynoir/vitepress-downloads',
    npm: '@binarynoir/vitepress-downloads',
  },
})
