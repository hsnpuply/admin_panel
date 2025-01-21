<script setup>
import { ref } from 'vue'

</script>
<template>
  <div class="main_content bg-slate-400 w-full min-h-[100vh] flex items-start">
  <div class="sidebar min-w-[17.5rem] bg-white min-h-[100vh]">
  <div class="logo p-[1.3rem] mb-8">
    <img src="../../assets/src/default-logo.svg" alt="">
  </div>
  <div class="nav pl-8">
    <div class="dashboard flex items-center">
      <Icon icon="material-symbols:dashboard" width="24" height="24" />
      <span class="ml-4">Dashboard</span>
      
    </div>
  </div>
  </div>
  <div class="content">
  Lorem ipsum dolor sit.
  </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
