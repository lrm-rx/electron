<template>
  <div class="w-[80%] mx-auto h-full">
    <div class="flex items-center h-[85%]">
      <ProviderSelect :providers v-model="currentProvider" />
    </div>
    <div class="flex items-center h-[15%]">
      <MessageInput @create="createConversation" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useConversationStore } from "../stores/conversation";
import { db } from "../db";
import { IProviderProps } from "../types";
import ProviderSelect from "../components/ProviderSelect.vue";
import MessageInput from "../components/MessageInput.vue";
const currentProvider = ref("");

const conversationStore = useConversationStore();
const router = useRouter();
const providers = ref<IProviderProps[]>([]);
onMounted(async () => {
  providers.value = await db.providers.toArray();
});

const modelInfo = computed(() => {
  const [providerId, selectedModel] = currentProvider.value.split("/");
  return {
    providerId: parseInt(providerId),
    selectedModel,
  };
});
const createConversation = async (question: string) => {
  const { providerId, selectedModel } = modelInfo.value;
  const currentDate = new Date().toISOString();
  const conversationId = await conversationStore.createConversation({
    title: question,
    providerId,
    selectedModel,
    createdAt: currentDate,
    updatedAt: currentDate,
  });
  const newMessageId = await db.messages.add({
    content: question,
    conversationId,
    createdAt: currentDate,
    updatedAt: currentDate,
    type: "question",
  });
  router.push(`/conversation/${conversationId}?init=${newMessageId}`);
};
</script>
