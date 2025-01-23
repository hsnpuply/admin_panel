<script setup>
import { ref } from "vue";
const isSlim_sidebar = ref(false)

const dashboard_activation = ref(false);
const toggle_dashoard = () => {
  dashboard_activation.value = !dashboard_activation.value;
};

const toggle_sidebar = ()=>{
  isSlim_sidebar.value = !isSlim_sidebar.value
}

import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="main_content bg-[##fefefe] bg-slate-400 w-full min-h-[100vh] flex items-start">
    <div class="sidebar  bg-white min-h-[100vh] w-fit
     text-menu_gray relative border-r-2 border-l-gray_border_right duration-500 transition-all"
      :class="isSlim_sidebar ? '!max-w-[4.5rem] hover:!min-w-[17.5rem]' : 'min-w-[17.5rem]'"
     >
      <div class="absolute  border-gray_border_right border-2 
       group right-[-6%] top-5 bg-white w-[1.875rem] duration-300 h-[1.875rem] z-[99] rounded-[.5rem] cursor-pointer
       flex items-center justify-center text-xl"
       @click="toggle_sidebar"
       >
        <Icon icon="line-md:arrow-close-left" width="14" height="14" :class="{'rotate-180 ' : isSlim_sidebar }" class="duration-500 text-gray_500 hover:text-gray_badge_txt" />
        </div>
      <div class="logo p-[1.3rem] mb-8">
        <img src="../../assets/src/default-logo.svg" alt="" :class="isSlim_sidebar ? 'w-full object-contain' : ''" />
      </div>
      <div class="dashboard_nav pl-8 flex flex-col items-start overflow-hidden">
        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-4 "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:dashboard-square-01"
                
                class="text-gray_500 w-[1.25rem] h-[1.25rem]"

              />
              <span class="ml-4 " :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">Dashboard</span>
            </div>
            <Icon :icon="dashboard_activation ? 'hugeicons:minus-sign' : 'hugeicons:plus-sign'" class="text-gray_500" width="18" height="18"  />
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

      <div class="all_sections flex flex-col items-start gap-4 w-full  overflow-hidden">

      <div class="user_section pl-8 flex flex-col items-start  w-full    mt-3">
        <h3 class="uppercase text-gray_500 mb-[1.375rem]">{{ isSlim_sidebar ? '...' : 'User' }}</h3>
      <!-- user section -->
        <div class="users_nav flex flex-col justify-start gap-[1.463rem] w-full   ">
          <div
          class="dashboard flex flex-col  gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between mr-4"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center justify-between ">
              <Icon
                icon="hugeicons:user-circle-02"
                class="text-gray_500 w-[2.25rem] h-[2.25rem]"
              />
              <span class="ml-4 " :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">Public Profile</span>
            </div>
            <Icon icon="hugeicons:plus-sign" class="text-gray_500 w-[1.25rem] h-[1.25rem]"  />
          </div>

        </div>

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full  cursor-pointer"
        >
          <div
            class="head_menu flex items-center mr-4 justify-between"
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:setting-07"
                
                class="text-gray_500 !w-[1.75rem] h-full"

              />
              <span class="ml-4 " :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">My Account</span>
            </div>
            <Icon icon="hugeicons:plus-sign" class="text-gray_500" width="18" height="18" 
            
             />
          </div>

        </div>
        
        <!-- Network -->
        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-4  "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:user-multiple-02"
                
                class="text-gray_500 w-[1.25rem] h-[1.25rem]"

              />
              <span class="ml-4 " :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">Network</span>
            </div>
            <Icon icon="hugeicons:plus-sign" class="text-gray_500" width="18" height="18" />
          </div>

        </div>

        <!-- Authentication -->

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-4 "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:location-user-04"
                
                class="text-gray_500 w-[1.25rem] h-[1.25rem]"

              />
              <span class="ml-4 " :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">Authentication</span>
            </div>
            <Icon icon="hugeicons:plus-sign" class="text-gray_500" width="18" height="18" />
          </div>

        </div>
        </div>

      </div>

      <!-- APPS SEction -->
      <div class="user_section pl-8 flex flex-col items-start   mt-3">
        <h3 class="uppercase text-gray_500 mb-[1.375rem]">{{ isSlim_sidebar ? '...' : 'Apps' }}</h3>
      <!-- Apps section -->
        <div class="apps_nav flex flex-col gap-[1.463rem]">
          <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer mr-8"
        >
          <div
            class="head_menu flex items-center justify-between  mr-4 "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:user-multiple-02"
                
                class="text-gray_500 w-[1.25rem] h-[1.25rem]"

              />
              <span class="ml-4 not-active" :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">User Managment</span>
            </div>
            <div class="bg-gray_badge_bg text-gray_badge_txt rounded-lg p-1 text-[0.625rem]"><p>Soon</p></div>
          </div>

        </div>

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-4 "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:scroll"
                
                class="text-gray_500 w-[1.25rem] h-[1.25rem]"

              />
              <span class="ml-4 not-active" :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">Projects</span>
            </div>
            <div class="bg-gray_badge_bg text-gray_badge_txt rounded-lg p-1 text-[0.625rem]"><p>Soon</p></div>
          </div>

        </div>
        
        <!-- Network -->
        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between  mr-4 "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:shopping-cart-01"
                
                class="text-gray_500 w-[1.25rem] h-[1.25rem]"

              />
              <span class="ml-4 not-active" :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">eCommerce</span>
            </div>
            <div class="bg-gray_badge_bg text-gray_badge_txt rounded-lg p-1 text-[0.625rem]"><p>Soon</p></div>
          </div>

        </div>

        </div>

      </div>



      <!-- Miscellaneous -->
      <div class="miscellaneous_section pl-8 flex flex-col items-start w-full   mt-3">
        <h3 class="uppercase text-gray_500 mb-[1.375rem] text-[13px ] " >{{ isSlim_sidebar ? '...' : 'Miscellaneous' }}</h3>
      <!-- Miscellaneous section -->
        <div class="users_nav flex flex-col gap-[1.463rem]  w-full">
          <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer"
        >
          <div
            class="head_menu flex items-center justify-between   mr-4 "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:ai-network"
                
                class="text-gray_500 w-[1.25rem] h-[1.25rem]"

              />
              <span class="ml-4 not-active" :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">Modals</span>
            </div>
            <div class="bg-gray_badge_bg text-gray_badge_txt rounded-lg p-1 text-[0.625rem]"><p>Soon</p></div>
          </div>

        </div>

        <div
          class="dashboard flex flex-col gap-[0.75rem] w-full cursor-pointer "
        >
          <div
            class="head_menu flex items-center justify-between  mr-4  "
            @click="toggle_dashoard"
          >
            <div class="dashboard flex items-center">
              <Icon
                icon="hugeicons:magic-wand-01"
                
                class="text-gray_500 w-[1.25rem] h-[1.25rem]"

              />
              <span class="ml-4 not-active" :class="isSlim_sidebar ? 'opacity-0' : 'opacity-100'">Wizards</span>
            </div>
            <div class="bg-gray_badge_bg text-gray_badge_txt rounded-lg p-1 text-[0.625rem]"><p>Soon</p></div>
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
