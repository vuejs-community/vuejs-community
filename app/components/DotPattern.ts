import { defineComponent, h } from 'vue'
import { cn } from '@/lib/utils' // 根据你的项目路径调整

export default defineComponent({
  name: 'DotPattern',
  setup() {
    return () =>
      h('span', {
        class: cn([
          'pointer-events-none absolute inset-0 z-auto',
          'bg-[radial-gradient(var(--foreground)_1px,transparent_1px)] bg-size-[5px_5px]',
          'opacity-[0.06]',
        ]),
      })
  },
})
