import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gitlon/version',
  description: 'Vite 构建版本插件：生成 version.json、注入版本信息并提供客户端缓存刷新能力',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build-version',
    'version-json',
    'cache-refresh',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@gitlon/version',
  },
  source: {
    npm: '@gitlon/version',
  },
})
