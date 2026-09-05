import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-push',
  description: 'vite SFTP 发布插件',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'ssh2',
    'sftp',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/minglo/vite-plugin-push',
    npm: 'https://www.npmjs.com/package/vite-plugin-push',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 0,
    },
  },
})
