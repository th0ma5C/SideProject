import { createApp, provide } from "vue"
import App from "@/App.vue"

const app = createApp(App)
// 路由
import router from './router'
// Pinia
import { createPinia } from "pinia"
const pinia = createPinia()
// svg插件依賴
import 'virtual:svg-icons-register'
// 引入插件
import plugins from "./components/global"
// swiper依賴
import { register } from "swiper/element/bundle"
register()
// mockServer依賴
import '@/mock/mockServer.js'


app.use(router).use(pinia).use(plugins)

app.mount('#app')