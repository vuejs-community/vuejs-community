import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'builtby',
  description: 'See who built which part of your UI. git blame, drawn on the running page. Works with React (Vite) and Next.js.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'git',
    'blame',
    'devtools',
    'nextjs',
    'react',
    'overlay',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yuvrajdahal/builtby',
    npm: 'https://www.npmjs.com/package/builtby',
    website: 'https://github.com/yuvrajdahal/builtby#readme',
  },
  source: {
    github: 'yuvrajdahal/builtby',
    npm: 'builtby',
  },
})
