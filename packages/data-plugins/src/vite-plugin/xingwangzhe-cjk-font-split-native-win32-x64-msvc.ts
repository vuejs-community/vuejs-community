import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xingwangzhe/cjk-font-split-native-win32-x64-msvc',
  description: 'Native Rust CJK font subsetting and persistent Vite caching. Installs only the native binary for your platform.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'font-subset',
    'cjk',
    'woff2',
    'vite',
    'vite-plugin',
    'napi-rs',
    'rust',
    'font-split',
  ],
  links: {
    github: 'https://github.com/xingwangzhe/cjk-font-split-native',
    npm: 'https://www.npmjs.com/package/@xingwangzhe/cjk-font-split-native-win32-x64-msvc',
    website: 'https://github.com/xingwangzhe/cjk-font-split-native#readme',
  },
  source: {
    github: 'xingwangzhe/cjk-font-split-native',
    npm: '@xingwangzhe/cjk-font-split-native-win32-x64-msvc',
  },
})
