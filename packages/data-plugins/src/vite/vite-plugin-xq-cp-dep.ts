import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xq-cp-dep',
  description: 'A vite copy all package.json config item \'dependencies\' and project directory \'assets\' to public directory plugin.一个将package.json配置文件中配置的\'dependencies\'的所有依赖包和项目目录\'assets\'自动复制到public目录的插件。',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-cp',
    'cp-dependencies-to-public',
    'cp-to-public',
    'cp-src-assets-to-public',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xqkeji/vite-plugin-xq-cp-dep',
    npm: 'https://www.npmjs.com/package/vite-plugin-xq-cp-dep',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 8,
    },
  },
})
