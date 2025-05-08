<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>My Vuetify App</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/vuetify">Vuetify</v-btn>
      <v-btn to="/trasation">Trasation</v-btn>
    </v-app-bar>

    <v-main>
      <!-- 這裡是路由視圖，頁面內容會在這裡顯示 -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-footer app>
      <v-row justify="center">
        <div class="text-center">
          &copy; {{ new Date().getFullYear() }}
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
// 這裡可以添加您需要的邏輯
</script>

<style>
/* 定義轉場效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>