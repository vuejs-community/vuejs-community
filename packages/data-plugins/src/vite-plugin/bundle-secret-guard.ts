import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bundle-secret-guard',
  description: 'Fail your build when secrets or API keys end up in the frontend bundle (dist/, build/, .next/static, out/). Provider patterns, gitleaks TOML rules, entropy + baseline, optional live-key verification, .env cross-check, source map scanning, Vite & webpack p',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'security',
    'secrets',
    'secret-scanning',
    'api-keys',
    'leak',
    'bundle',
    'frontend',
    'vite',
    'vite-plugin',
    'webpack',
    'nextjs',
    'env',
    'dotenv',
    'gitleaks',
    'entropy',
    'baseline',
    'ci',
    'cli',
    'github-action',
    'sarif',
    'devsecops',
  ],
  links: {
    github: 'https://github.com/MrLouisWright/bundle-secret-guard',
    npm: 'https://www.npmjs.com/package/bundle-secret-guard',
    website: 'https://github.com/MrLouisWright/bundle-secret-guard#readme',
  },
  source: {
    github: 'MrLouisWright/bundle-secret-guard',
    npm: 'bundle-secret-guard',
  },
})
