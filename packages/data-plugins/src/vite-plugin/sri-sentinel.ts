import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sri-sentinel',
  description: 'Subresource Integrity (SRI) generator and checker: hashes <script> and <link> resources in built HTML (sha256/384/512, local and CDN), import maps, lazy webpack chunks, writes integrity + crossorigin, fails CI on missing, wrong or stale hashes. JSON manif',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sri',
    'subresource-integrity',
    'integrity',
    'security',
    'cdn',
    'supply-chain-security',
    'hash',
    'sha384',
    'html',
    'importmap',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'astro-integration',
    'sarif',
    'cli',
    'github-action',
    'devsecops',
  ],
  links: {
    github: 'https://github.com/MrLouisWright/sri-sentinel',
    npm: 'https://www.npmjs.com/package/sri-sentinel',
    website: 'https://mrlouiswright.github.io/sri-sentinel/',
  },
  source: {
    github: 'MrLouisWright/sri-sentinel',
    npm: 'sri-sentinel',
  },
})
