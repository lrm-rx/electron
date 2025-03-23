<template>
  <div class="provider-select w-full">
    <SelectRoot v-model="currentModel">
      <SelectTrigger class="flex w-full items-center justify-between rounded-md py-1.5 px-3 shadow-sm border outline-none data-[placeholder]:text-gray-400">
        <SelectValue placeholder="请选择模型" />
        <Icon icon="radix-icons:chevron-down" class="h-5 w-5" />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent class="bg-white rounded-sm shadow-sm z-[100] border">
          <SelectViewport class="p-2">
            <div v-for="provider in providers">
              <SelectLabel class="flex items-center px-6 h-7 text-gray-500">
                <img class="h-5 w-5 mr-2 rounded" :src="provider.avatar" :alt="provider.name"  />
                {{ provider.name }}
              </SelectLabel>
              <SelectGroup>
                <SelectItem
                  class="flex items-center px-6 h-7 outline-none rounded text-violet-600 cursor-pointer data-[highlighted]:bg-violet-600 data-[highlighted]:text-white"
                  v-for="(model, index) in provider.models"
                  :key="index"
                  :value="`${provider.id}/${model}`"
                ><SelectItemIndicator class=" absolute left-2 w-6">
                    <Icon icon="radix-icons:check" />
                  </SelectItemIndicator>
                  <SelectItemText>{{ model }}</SelectItemText>
                </SelectItem>
              </SelectGroup>
            </div>
            <SelectSeparator class="h-[1px] my-2 bg-gray-300" />
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>

<script lang="ts" setup>
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "radix-vue";
import { Icon } from "@iconify/vue";
import { IProviderProps } from "../types";
defineProps<{ providers: IProviderProps[] }>();
const currentModel = defineModel<string>()
</script>
