export interface IConversationProps {
  id: number;
  title: string;
  selectedModel: string;
  createdAt: string;
  updatedAt: string;
  providerId: number;
}

export interface IProviderProps {
  id: number;
  name: string;
  title?: string;
  desc?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  models: string[];
}

export type MessageStatus = "loading" | "streaming" | "finished";

export interface IMessageProps {
  id: number;
  content: string;
  type: "question" | "answer";
  conversationId: number;
  status?: MessageStatus;
  createdAt: string;
  updatedAt: string;
}
