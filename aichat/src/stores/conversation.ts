import { defineStore } from "pinia";
import { IConversationProps } from "../types";
import { db } from "../db";

export interface ConversationStore {
  items: IConversationProps[];
}

export const useConversationStore = defineStore("conversation", {
  state: (): ConversationStore => {
    return {
      items: [],
    };
  },
  actions: {
    async fetchConversations() {
      this.items = await db.conversations.toArray();
    },
    async createConversation(createData: Omit<IConversationProps, "id">) {
      const newCId = await db.conversations.add(createData);
      this.items.push({
        id: newCId,
        ...createData,
      });
      return newCId;
    },
  },
  getters: {
    totalNumber: (state) => state.items.length,
    getConversationById: (state) => (id: number) => {
      return state.items.find((item) => item.id === id);
    },
  },
});
