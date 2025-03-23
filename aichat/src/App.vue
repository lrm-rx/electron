<template>
  <div class="flex items-center justify-between h-screen">
    <div class="w-[300px] bg-gray-50 h-full border-r border-gray-200">
      <div class="h-[90%] overflow-y-auto thin-scrollbar">
        <ConversationList :items />
      </div>
      <div class="h-[10%] grid grid-cols-2 gap-2 p-2">
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
      </div>
    </div>
    <div class="h-full flex-1 flex items-center">
      <div class="w-[80%] mx-auto h-full">
        <div class="flex items-center h-[85%]">
          <ProviderSelect :providers v-model="selectedModel" />
        </div>
        <div class="flex items-center h-[15%]">
          <MessageInput v-model="selectedModel" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import ConversationList from "./components/ConversationList.vue";
import ProviderSelect from "./components/ProviderSelect.vue";
import MessageInput from './components/MessageInput.vue'
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

const selectedModel = ref("");
const providers: IProviderProps[] = [
  {
    id: 1,
    name: "文心一言",
    desc: "文心一言 百度出品的大模型",
    models: ["ERNIE-4.0-8K", "ERNIE-3.5-8K", "ERNIE-Speed-8K"],
    avatar:
      "https://nlp-eb.cdn.bcebos.com/static/eb/asset/vip-robin.930b8cae.png",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
  },
  {
    id: 2,
    name: "通义千问",
    desc: "通义千问",
    // https://help.aliyun.com/zh/dashscope/developer-reference/api-details?spm=a2c4g.11186623.0.0.5bf41507xgULX5#b148acc634pfc
    models: ["qwen-turbo", "qwen-plus", "qwen-max"],
    avatar:
      "https://img.alicdn.com/imgextra/i4/O1CN01EfJVFQ1uZPd7W4W6i_!!6000000006051-2-tps-112-112.png",
    createdAt: "2025-03-20",
    updatedAt: "2025-03-20",
  },
];
</script>
