export const findChatById = (
  chats: MSNChat[],
  id: number
): MSNChat | undefined => chats.find((chat) => chat.id === id);
