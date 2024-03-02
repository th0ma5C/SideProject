import { createApp } from "vue"
import App from "@/App.vue"

const app = createApp(App)
// 路由
import router from './router'

// svg插件
import 'virtual:svg-icons-register'
import globalComponents from "./components/global"

// nanoid
import { nanoid } from "nanoid"

app.use(router).use(globalComponents)

// 設定全局變數window, nanoid
app.config.globalProperties.window = window
app.config.globalProperties.window = nanoid

app.mount('#app')