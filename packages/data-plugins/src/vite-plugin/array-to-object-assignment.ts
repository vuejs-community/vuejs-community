import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'array-to-object-assignment',
  description: 'Do you use really a lot of slow array assignment pattern const [state, setState] = useState();  Use this plugin to transform it to fast const {0:state,1:setState} = useState() object assignment pattern!',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'rollup',
    'rolldown',
    'vite-plugin',
    'transform',
    'react',
    'useState',
    'array-assignment',
    'object-destructuring',
    'performance',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/array-to-object-assignment',
  },
  source: {
    npm: 'array-to-object-assignment',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 5,
    },
  },
})
