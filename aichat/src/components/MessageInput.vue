<template>
  <div
    class="message-input w-full shadow-sm border rounded-lg border-gray-300 flex items-center py-1 px-2 focus-within:border-violet-600"
  >
    <input
      class="outline-none border-0 flex-1 bg-white focus:ring-0"
      type="text"
      v-model="model"
      @keydown.enter="onCreate"
    />
    <Button icon-name="radix-icons:paper-plane" @click="onCreate">发送</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from "./Button.vue";

const emit = defineEmits<{
  create: [value: string];
}>();
const model = defineModel<string>({ default: "" });
const onCreate = () => {
  if (model.value && model.value.trim() !== "") {
    emit("create", model.value);
  }
};
</script>
