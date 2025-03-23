<template>
  <div class="message-list">
    <div
      class="message-item mb-3"
      v-for="message in messages"
      :key="message.id"
    >
      <div class="flex" :class="{ 'justify-end': message.type === 'question' }">
        <div>
          <div
            class="text-sm text-gray-500 mb-2"
            :class="{ 'text-right': message.type === 'question' }"
          >
            {{ dayjs(message.createdAt).format("YYYY-MM-DD HH:mm:ss")  }}
          </div>
          <div
            class="message-question bg-violet-600 text-white p-2 rounded-md"
            v-if="message.type === 'question'"
          >
            {{ message.content }}
          </div>
          <div
            v-else
            class="message-question bg-gray-200 text-gray-700 p-2 rounded-md"
          >
            <template v-if="message.status === 'loading'">
              <Icon icon="line-md:loading-twotone-loop"></Icon>
            </template>
            <template v-else>
              {{ message.content }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import dayjs from "dayjs";
import { IMessageProps } from "../types";
defineProps<{ messages: IMessageProps[] }>();
</script>
