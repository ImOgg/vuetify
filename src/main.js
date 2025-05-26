import '@mdi/font/css/materialdesignicons.css';  // 引入 MDI 的 CSS
import 'vuetify/styles'; // 已有的引入
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';
import { zhHant, en } from 'vuetify/locale'; // 引入繁體中文與英文語言包
import router from './router'
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

// 創建 Vuetify 實例

// 自定義語言包，補充缺少的翻譯鍵
const customZhHant = {
  ...zhHant, // 繼承內建的繁體中文翻譯
  datePicker: {
    ...zhHant.datePicker,
    header: '選擇日期', // 補充缺失的 header 翻譯
  },
};

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'zhHant', // 預設繁體中文
    fallback: 'en', // 回退語言設置為英文
    messages: {
      zhHant: customZhHant, // 使用自定義的繁體中文翻譯
      en,
    },
  },
});

// createApp(App).use(vuetify).mount('#app');

const app = createApp(App)

// 使用路由
app.use(router)
app.use(vuetify)
app.component('RecycleScroller', RecycleScroller)
app.mount('#app')
