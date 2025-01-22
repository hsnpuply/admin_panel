<script setup>
import { ref } from "vue";

import { Icon } from "@iconify/vue";

</script>
<template>
  <div class="main_content bg-slate-400 w-full min-h-[100vh] flex items-start">
    <div class="sidebar min-w-[17.5rem] bg-white min-h-[100vh]">
      <div class="logo p-[1.3rem] mb-8">
        <img src="../../assets/src/default-logo.svg" alt="" />
      </div>
      <div class="nav pl-8">
        <div class="dashboard flex flex-col gap-[0.75rem]">
          <div class="head_menu flex items-center justify-between bg-violet-500">
            <Icon icon="hugeicons:dashboard-square-01" width="24" height="24" />
            <span class="ml-4">Dashboard</span>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>
          <div class="sub_menu border-l-2 border-gray-500  flex flex-col gap-2">
            <div class="light_side_bar">
              <p>Light Sidebar</p>
            </div>
            <div class="dark_side_bar">
              <p>Dark Sidebar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">Lorem ipsum dolor sit.</div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
