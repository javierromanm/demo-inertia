import { createApp, h } from 'vue'
import { createInertiaApp, Head } from '@inertiajs/vue3'
import Layout from "./Shared/Layout.vue"

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    if (page.default.layout === undefined) {
      page.default.layout = Layout
    }    
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Head", Head)
      .mount(el)
  },
  progress: {
    delay: 250,
    color: 'green',
    includeCSS: true,
    showSpinner: true,
  },
  title: title => 'My App | ' + title
})
