import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-push',
  description: 'vite SFTP 发布插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ssh2',
    'sftp',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'minglo/vite-plugin-push',
    npm: 'vite-plugin-push',
  },
  links: {
    github: 'https://github.com/minglo/vite-plugin-push',
    npm: 'https://www.npmjs.com/package/vite-plugin-push',
    website: 'https://github.com/minglo/vite-plugin-push#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
