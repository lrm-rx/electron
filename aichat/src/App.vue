<template>
  <div class="flex items-center justify-between h-screen">
    <div class="w-[300px] bg-gray-50 h-full border-r border-gray-200">
      <div class="h-[90%] overflow-y-auto thin-scrollbar">
        <ConversationList :items />
      </div>
      <div class="h-[10%] grid grid-cols-2 gap-2 p-2">
        <RouterLink to="/">
          <button
            class="shadow-sm inline-flex items-center justify-center bg-violet-600 text-white hover:bg-violet-600/90 border border-violet-600 h-[32px] py-[8px] px-[15px] text-sm rounded-[4px]"
          >
            <Icon icon="radix-icons:chat-bubble" class="mr-2"></Icon>
            新建聊天
          </button>
          <button
            class="shadow-sm inline-flex items-center justify-center bg-blue-50 text-blue-400 hover:bg-blue-400 border border-blue-400 hover:text-white h-[32px] py-[8px] px-[15px] text-sm rounded-[4px]"
          >
            <Icon icon="radix-icons:gear" class="mr-2"></Icon>
            应用设置
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="h-full flex-1">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import ConversationList from "./components/ConversationList.vue";
import { IConversationProps, IProviderProps } from "./types";
const items: IConversationProps[] = [
  {
    id: 1,
    selectedModel: "GPT-3.5-Turbo",
    title: "什么是光合作用1",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
    providerId: 1,
  },
  {
    id: 2,
    selectedModel: "GPT-3.5-Turbo",
    title: "什么是光合作用",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
    providerId: 1,
  },
  {
    id: 3,
    selectedModel: "GPT-3.5-Turbo",
    title: "什么是光合作用",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
    providerId: 1,
  },
  {
    id: 4,
    selectedModel: "GPT-3.5-Turbo",
    title: "什么是光合作用, 你的说法很请正确，理解的很不错",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
    providerId: 1,
  },
  {
    id: 5,
    selectedModel: "GPT-3.5-Turbo",
    title: "什么是光合作用1",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
    providerId: 1,
  },
  {
    id: 6,
    selectedModel: "GPT-3.5-Turbo",
    title: "什么是光合作用",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
    providerId: 1,
  },
  {
    id: 7,
    selectedModel: "GPT-3.5-Turbo",
    title: "什么是光合作用",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
    providerId: 1,
  },
  {
    id: 8,
    selectedModel: "GPT-3.5-Turbo",
    title: "什么是光合作用, 你的说法很请正确，理解的很不错",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
    providerId: 1,
  },
];
</script>
