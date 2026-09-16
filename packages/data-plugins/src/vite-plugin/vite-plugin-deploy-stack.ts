import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deploy-stack',
  description: 'A Vite plugin that automatically generates AWS ECS Fargate infrastructure, Dockerfiles, and CI/CD pipelines via deploy-stack.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'aws',
    'fargate',
    'terraform',
    'deploy-stack',
  ],
  source: {
    npm: 'vite-plugin-deploy-stack',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-deploy-stack',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 575,
      weekly: 575,
    },
  },
})
