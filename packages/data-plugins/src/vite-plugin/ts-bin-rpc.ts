import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ts-bin-rpc',
  description: 'Code-first binary RPC for TypeScript: lazy views over the response bytes, numeric arrays as TypedArray columns, and the tbr code generator.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rpc',
    'typescript',
    'binary',
    'serialization',
    'zero-copy',
    'typed-array',
    'codegen',
    'cli',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Tom4ikss/ts-bin-RPC',
    npm: 'https://www.npmjs.com/package/ts-bin-rpc',
    website: 'https://tom4ikss.github.io/ts-bin-RPC/',
  },
  source: {
    github: 'Tom4ikss/ts-bin-RPC',
    npm: 'ts-bin-rpc',
  },
})
