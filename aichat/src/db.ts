import Dexie, { EntityTable } from "dexie";
import { IProviderProps, IConversationProps, IMessageProps } from "./types";
import { conversations, messages, providers } from "./testData";

export const db = new Dexie("AIChat") as Dexie & {
  providers: EntityTable<IProviderProps, "id">;
  conversations: EntityTable<IConversationProps, "id">;
  messages: EntityTable<IMessageProps, "id">;
};

db.version(1).stores({
  providers: "++id, name",
  conversations: "++id, providerId",
  messages: "++id, conversationId",
});

export const initProviders = async () => {
  const count = await db.providers.count();
  count === 0 && db.providers.bulkAdd(providers);
};
