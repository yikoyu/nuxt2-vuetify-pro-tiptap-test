<template>
  <div>
    <ClientOnly>
      <vuetify-tiptap v-model="content" :config="config" :toolbar="toolbar" />
    </ClientOnly>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
import {
  VuetifyTiptap
} from 'vuetify-pro-tiptap'

const toolbar = [
  'bold',
  'italic',
  'underline',
  'strike',
  'color',
  'highlight',
  '|',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  '|',
  'left',
  'center',
  'right',
  'justify',
  '|',
  'bulletList',
  'orderedList',
  'taskList',
  'indent',
  'outdent',
  '|',
  'link',
  'image',
  'video',
  '|',
  'blockquote',
  'rule',
  'code',
  '|',
  'clear',
  'fullscreen',
  'undo',
  'redo',
]

export default defineComponent({
  components: {
    VuetifyTiptap,
  },
  props: {
    linkType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content = ref('')
    const config = reactive({
        image: {
          upload(file) {
            // Either use propType
            // Upload image to backend
            // Get src as result
            // Return src
            const backendAPI = `https://backend/${props.linkType}/id`
            console.log('backendAPI :>> ', backendAPI)


            const url = URL.createObjectURL(file)
            return Promise.resolve(url)
          },
        },
      })

    return {
      content,
      config,
      toolbar
    }
  }
})
</script>
