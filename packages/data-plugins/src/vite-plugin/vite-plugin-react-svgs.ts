import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-svgs',
  description: 'A vite plugin, can import svg as react component and edit svg color by props',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svg',
    'vite',
    'vite-plugin',
    'component',
    'plugin',
    'color',
    'react',
    'loader',
  ],
  links: {
    github: 'https://github.com/ChaconneLuo/vite-plugin-svgs',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-svgs',
    website: 'https://github.com/ChaconneLuo/vite-plugin-svgs#readme',
  },
  source: {
    github: 'ChaconneLuo/vite-plugin-svgs',
    npm: 'vite-plugin-react-svgs',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 44,
      weekly: 10,
    },
  },
})
