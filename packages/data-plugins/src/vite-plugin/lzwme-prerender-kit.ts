import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lzwme/prerender-kit',
  description: '通用预渲染(SSG)工具包。基于无头浏览器将 SPA 路由渲染为静态 HTML，内置增量预渲染能力，支持 vite / webpack / rollup 插件及 CLI 独立使用。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'prerender',
    'prerender-kit',
    'ssg',
    'ssg-prerender',
    'static-site-generator',
    'seo',
    'spa',
    'puppeteer',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'sitemap',
    '预渲染',
    '静态化',
  ],
  source: {
    github: 'lzwme/prerender-kit',
    npm: '@lzwme/prerender-kit',
  },
  links: {
    github: 'https://github.com/lzwme/prerender-kit',
    npm: 'https://www.npmjs.com/package/@lzwme/prerender-kit',
    website: 'https://github.com/lzwme/prerender-kit',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 25,
    },
  },
})
