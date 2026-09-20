import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gitlab-flow',
  description: '控制台打印构gitlab效流水线建信息插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gitlab',
    'flow',
    'codeup',
    'vite',
    'vite-plugin',
    'console',
    'pipeline',
  ],
  links: {
    github: 'https://github.com/taosiqi/vite-plugin-gitlab-flow',
    npm: 'https://www.npmjs.com/package/vite-plugin-gitlab-flow',
    website: 'https://github.com/taosiqi/vite-plugin-gitlab-flow#readme',
  },
  source: {
    github: 'taosiqi/vite-plugin-gitlab-flow',
    npm: 'vite-plugin-gitlab-flow',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
