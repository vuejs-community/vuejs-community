import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xq-cp-dep',
  description: 'A vite plugin that copies all package.json \'dependencies\' and project \'assets\' into the public directory.一个将 package.json 的 dependencies 全部依赖包和项目 assets 自动复制到 public 目录的 Vite 插件。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-cp',
    'cp-dependencies-to-public',
    'cp-to-public',
    'cp-src-assets-to-public',
  ],
  links: {
    github: 'https://github.com/xqkeji/vite-plugin-xq-cp-dep',
    npm: 'https://www.npmjs.com/package/vite-plugin-xq-cp-dep',
    website: 'http://xqkeji.cn/',
  },
  source: {
    github: 'xqkeji/vite-plugin-xq-cp-dep',
    npm: 'vite-plugin-xq-cp-dep',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
