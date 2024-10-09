1. 建立 Vite 專案
    - 首先，在終端中執行以下命令來建立 Vite 專案：
```
npm create vite@latest my-vuetify-project
cd my-vuetify-project
npm install
```
2. 安裝 Vuetify
    - 在專案目錄中，安裝 Vuetify 及其所需依賴：
```
npm install vuetify@next
npm install sass sass-loader@10
```
3. 安裝 MDI 圖示庫
    - 打開你的終端，並運行以下命令來安裝 @mdi/font：
```
npm install @mdi/font
```

4. 配置 Vuetify

    - 接著，開啟 main.js 或 main.ts 檔案，並加入 Vuetify 的初始化設定：
```
import '@mdi/font/css/materialdesignicons.css';  // 引入 MDI 的 CSS
import 'vuetify/styles'; // 已有的引入
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';

// 創建 Vuetify 實例
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',  // 設置默認圖示集
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(vuetify).mount('#app');
```

<!-- 時間選擇封裝參考資料 -->
https://blog.csdn.net/qq_34361235/article/details/134715389