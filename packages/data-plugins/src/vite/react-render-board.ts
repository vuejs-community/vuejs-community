import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-render-board',
  description: 'React 앱의 실시간 렌더 트리를 박스+선 다이어그램 캔버스로 시각화하는 dev-only 도구',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'react',
    'devtools',
    'fiber',
    'component-tree',
    'visualization',
    'react-flow',
    'dev-tool',
    'vite-plugin',
    'webpack-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yoonjaehong26/react-render-board',
    npm: 'https://www.npmjs.com/package/react-render-board',
  },
  stats: {
    downloads: {
      monthly: 120,
      weekly: 27,
    },
  },
})
