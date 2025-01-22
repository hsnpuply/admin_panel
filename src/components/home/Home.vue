<script setup>
import { ref } from "vue";

const dashboard_activation = ref(false);
const toggle_dashoard = () => {
  dashboard_activation.value = !dashboard_activation.value;
};

import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="main_content bg-slate-400 w-full min-h-[100vh] flex items-start">
    <div class="sidebar min-w-[17.5rem] bg-white min-h-[100vh]">
      <div class="logo p-[1.3rem] mb-8">
        <img src="../../assets/src/default-logo.svg" alt="" />
      </div>
      <div class="dashboard_nav pl-8 flex flex-col items-start">
        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:dashboard-square-01"
                width="24"
                height="24"
              />
              <span class="ml-4">Dashboard</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>
          <div
            :class="{ 'h-[4rem]': dashboard_activation }"
            class="h-0 mb-0 sub_menu overflow-hidden duration-300 border-l-2 border-gray-500 pl-5 flex flex-col gap-2"
          >
            <div class="light_side_bar relative w-full hover:bg-gray-500">
              <p>Light Sidebar</p>
            </div>
            <div class="dark_side_bar relative w-full hover:bg-gray-500">
              <p>Dark Sidebar</p>
            </div>
          </div>
        </div>
      </div>


      <div class="all_sections flex flex-col items-start gap-4">

      <div class="user_section pl-8 flex flex-col items-start   mt-3">
        <h3 class="uppercase text-gray_500 mb-[1.375rem]">user</h3>
      <!-- user section -->
        <div class="users_nav flex flex-col gap-[1.75rem] w-full bg-violet-500 ">
          <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  bg-red-800"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:user-circle-02"
                width="24"
                height="24"
              />
              <span class="ml-4">Public Profile</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:setting-07"
                width="24"
                height="24"
              />
              <span class="ml-4">My Account</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>
        
        <!-- Network -->
        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:user-multiple-02"
                width="24"
                height="24"
              />
              <span class="ml-4">Network</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>

        <!-- Authentication -->

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:location-user-04"
                width="24"
                height="24"
              />
              <span class="ml-4">Authentication</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>
        </div>

      </div>

      <!-- APPS SEction -->
      <div class="user_section pl-8 flex flex-col items-start   mt-3">
        <h3 class="uppercase text-gray_500 mb-[1.375rem]">user</h3>
      <!-- user section -->
        <div class="users_nav flex flex-col gap-[1.75rem]">
          <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:user-circle-02"
                width="24"
                height="24"
              />
              <span class="ml-4">Public Profile</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:setting-07"
                width="24"
                height="24"
              />
              <span class="ml-4">My Account</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>
        
        <!-- Network -->
        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:user-multiple-02"
                width="24"
                height="24"
              />
              <span class="ml-4">Network</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>

        <!-- Authentication -->

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:location-user-04"
                width="24"
                height="24"
              />
              <span class="ml-4">Authentication</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>
        </div>

      </div>
      <!-- Miscellaneous -->
      
      <div class="user_section pl-8 flex flex-col items-start   mt-3">
        <h3 class="uppercase text-gray_500 mb-[1.375rem] text-[13px ]">Miscellaneous</h3>
      <!-- user section -->
        <div class="users_nav flex flex-col gap-[1.75rem]">
          <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:user-circle-02"
                width="24"
                height="24"
              />
              <span class="ml-4">Modals</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

        </div>

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer "
        >
          <div
            class="head_menu flex items-center justify-between  mr-8 w-full bg-red-500 bg-red-500 w-full"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:setting-07"
                width="24"
                height="24"
              />
              <span class="ml-4">Wizards</span>
            </div>
            <Icon icon="hugeicons:plus-sign" width="24" height="24" />
          </div>

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
