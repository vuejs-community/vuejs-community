import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-render-board',
  description: 'React 앱의 실시간 렌더 트리를 박스+선 다이어그램 캔버스로 시각화하는 dev-only 도구',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'yoonjaehong26/react-render-board',
    npm: 'react-render-board',
  },
  links: {
    github: 'https://github.com/yoonjaehong26/react-render-board',
    npm: 'https://www.npmjs.com/package/react-render-board',
    website: 'https://github.com/yoonjaehong26/react-render-board#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 279,
      weekly: 25,
    },
  },
})
