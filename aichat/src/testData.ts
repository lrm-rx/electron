import { IMessageProps, IConversationProps, IProviderProps } from './types'
export const messages: IMessageProps[] = [
  { id: 1, content: '什么是光合作用', createdAt: '2025-03-20', updatedAt: '2025-03-20', type: 'question', conversationId: 1 },
  { id: 2, content: '你的说法很请正确，理解的很不错,你的说法很请正确，理解的很不错', createdAt: '2025-03-20', updatedAt: '2025-03-20', type: 'answer', conversationId: 1 },
  { id: 3, content: '请告诉我更多', createdAt: '2025-03-20',updatedAt: '2025-03-20',  type: 'question', conversationId: 1 },
  { id: 4, content: '你的说法很请正确，理解的很不错,你的说法很请正确，理解的很不错', createdAt: '2025-03-20', updatedAt: '2025-03-20', type: 'answer', conversationId: 1 },
  { id: 5, content: '还有更多的信息吗', createdAt: '2025-03-20', type: 'question', updatedAt: '2025-03-20', conversationId: 1 },
  { id: 6, content: '', createdAt: '2025-03-20', updatedAt: '2025-03-20', type: 'answer', status: 'loading', conversationId: 1 },
  { id: 7, content: '2 什么是光合作用', createdAt: '2025-03-20', updatedAt: '2025-03-20', type: 'question', conversationId: 2 },
  { id: 8, content: '你的说法很请正确', createdAt: '2025-03-20', updatedAt: '2025-03-20', type: 'answer', conversationId: 2 },
  { id: 9, content: '请告诉我更多', createdAt: '2025-03-20',updatedAt: '2025-03-20',  type: 'question', conversationId: 2 },
  { id: 10, content: '你的说法很请正确，理解的很不错,你的说法很请正确，理解的很不错', createdAt: '2025-03-20', updatedAt: '2025-03-20', type: 'answer', conversationId: 2 },
  { id: 11, content: '3 还有更多的信息吗', createdAt: '2025-03-20', type: 'question', updatedAt: '2025-03-20', conversationId: 3 },
  { id: 12, content: '', createdAt: '2025-03-20', updatedAt: '2025-03-20', type: 'answer', status: 'loading', conversationId: 3 },
]
export const conversations: IConversationProps[] = [
  { id: 1, selectedModel: 'GPT-3.5-Turbo', title: '1 什么是光合作用', createdAt: '2025-03-20', updatedAt: '2025-03-20', providerId: 1},
  { id: 2, selectedModel: 'GPT-3.5-Turbo', title: '2 什么是光合作用', createdAt: '2025-03-20', updatedAt: '2025-03-20', providerId: 1},
  { id: 3, selectedModel: 'GPT-3.5-Turbo', title: '3 什么是光合作用', createdAt: '2025-03-20', updatedAt: '2025-03-20', providerId: 1},
  { id: 4, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用, 你的说法很请正确，理解的很不错', createdAt: '2025-03-20', updatedAt: '2025-03-20', providerId: 1},
  { id: 5, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用1', createdAt: '2025-03-20', updatedAt: '2025-03-20', providerId: 1},
  { id: 6, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用', createdAt: '2025-03-20', updatedAt: '2025-03-20', providerId: 1},
  { id: 7, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用', createdAt: '2025-03-20', updatedAt: '2025-03-20', providerId: 1},
  { id: 8, selectedModel: 'GPT-3.5-Turbo', title: '什么是光合作用, 你的说法很请正确，理解的很不错', createdAt: '2025-03-20', updatedAt: '2025-03-20', providerId: 1}
]

export const providers: IProviderProps[] = [
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
]
