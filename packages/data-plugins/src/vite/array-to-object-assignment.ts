import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'array-to-object-assignment',
  description: 'Do you use really a lot of slow array assignment pattern const [state, setState] = useState();  Use this plugin to transform it to fast const {0:state,1:setState} = useState() object assignment pattern!',
  version: '1.0.5',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/array-to-object-assignment',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 4,
    },
  },
})
