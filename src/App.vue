<script setup>
import { ref, computed } from 'vue';
import TimePicker from './components/TimePicker.vue'; // 引入 TimePicker 組件
let items = ref([]); // 定義一個可變的 items 列表

// 在 mount 時更新 items 的值
items.value = [
  { id: 1, name: 'California' },
  { id: 2, name: 'Colorado' },
  { id: 3, name: 'Florida' },
  { id: 4, name: 'Georgia' },
  { id: 5, name: 'Texas' },
  { id: 6, name: 'Wyoming' }
];
let form = ref({
  name: '',
  email: '',
  gender: '',
  birthdate: null,  // 設置為 null，避免使用空字符串
});
let selectedItem = ref(null); // 儲存選中的項目
const colors = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'];
const model = ref(0);
</script>
<template>
  <v-container>
    <!-- 可以輸入數值的select 注意如果資料是object 要用item-title 不然他會顯示object object-->
    <v-combobox label="Combobox" v-model="selectedItem" item-title="name" :items="items"></v-combobox>
    <!-- 普通的select -->
    <v-select v-model="selectedItem" :items="items" label="Select a State" item-title="name" item-value="id"></v-select>
    <p>Selected item: {{ selectedItem }}</p> <!-- 顯示選中的 id 或完整的物件 -->
    <v-carousel v-model="model" show-arrows>
      <v-carousel-item v-for="(color, i) in colors" :key="color" :value="i">
        <v-sheet :color="color" height="100%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-form>
      <!-- 名稱輸入框 -->
      <v-text-field v-model="form.name" label="名稱" required></v-text-field>

      <!-- 電子郵件輸入框 -->
      <v-text-field v-model="form.email" label="電子郵件" type="email" required></v-text-field>

      <!-- 性別選擇框 -->
      <v-select v-model="form.gender" :items="['男', '女']" label="性別" required class="w-full"></v-select>

      <!-- 日期選擇框 -->

      <TimePicker v-model="date" label="選擇日期" />

      <v-btn color="primary" type="submit">提交</v-btn>
    </v-form>
  </v-container>
</template>
