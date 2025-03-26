<template>
  <div class="flex items-center justify-between h-screen">
    <div class="w-[300px] bg-gray-50 h-full border-r border-gray-200">
      <div class="h-[90%] overflow-y-auto thin-scrollbar">
        <ConversationList :items="items" />
      </div>
      <div class="h-[10%] grid grid-cols-2 gap-2 p-2">
        <div>
          <RouterLink to="/">
            <Button icon-name="radix-icons:chat-bubble" class="w-full">
              新建聊天
            </Button>
          </RouterLink>
        </div>

        <div>
          <RouterLink to="/settings">
            <Button icon-name="radix-icons:gear" plain class="w-full">
              应用设置
            </Button>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="h-full flex-1">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import ConversationList from "./components/ConversationList.vue";
import Button from "./components/Button.vue";
import { initProviders } from "./db";
import { useConversationStore } from "./stores/conversation";

const conversationStore = useConversationStore();
const items = computed(() => conversationStore.items);
onMounted(async () => {
  await initProviders();
  conversationStore.fetchConversations();
});
</script>
