import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => h(
      'div',
      { class: 'p-6 border-b md:p-8 lg:p-10' },
      [
        h(
          'h1',
          { class: 'text-2xl font-semibold leading-snug tracking-tighter md:text-3xl lg:text-5xl' },
          props.title,
        ),
        h('p', {
          class: 'text-muted-foreground text-sm leading-relaxed md:text-lg lg:text-xl',
        }, props.description),
      ],
    )
  },
})
