import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@poetlife/aladdin-sdk',
  description: 'aladdin 创作与发布 SDK：在自己的构建与自己的页面里接入平台',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aladdin',
    'galaxy',
    'vite-plugin',
    'connect',
  ],
  links: {
    github: 'https://github.com/poetlife/aladdin',
    npm: 'https://www.npmjs.com/package/@poetlife/aladdin-sdk',
    website: 'https://github.com/poetlife/aladdin/tree/main/sdk#readme',
  },
  source: {
    github: 'poetlife/aladdin',
    npm: '@poetlife/aladdin-sdk',
  },
})
