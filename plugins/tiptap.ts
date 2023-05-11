import Vue from 'vue'
import type { Plugin } from '@nuxt/types'
import { createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/lib/style.css'

type Recordable<T = any> = Record<string, T>

const tiptapPlugin: Plugin = ({ app }) => {
  const vuetify = app.vuetify

  if (!vuetify) return

  const VuetifyProTipTap = createVuetifyProTipTap({
    vuetify,
    lang: 'en'
  })

  if (!(Vue as Recordable).__check_vuetify_pro_tipTap__) {
    Vue.use(VuetifyProTipTap)
  }

  ;(Vue as Recordable).__check_vuetify_pro_tipTap__ = true
}

export default tiptapPlugin
