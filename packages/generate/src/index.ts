import { main } from './collect'

main().catch((error) => {
  console.error('Collection failed:', error)
  process.exitCode = 1
})
