import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-stack',
  description: 'A Vite plugin that automatically generates AWS ECS Fargate infrastructure, Dockerfiles, and CI/CD pipelines via deploy-stack.',
  icon: 'logos:vite-icon',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'aws',
    'fargate',
    'terraform',
    'deploy-stack',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-deploy-stack',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-stack',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
