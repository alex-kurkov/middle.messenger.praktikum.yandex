export function abbreviateUser(user: MSNUser): string {
  if (!user) {
    return '';
  }
  return `${user?.first_name.charAt(0)}${user?.second_name.charAt(0)}`;
}

export function abbreviateChat<P extends { chat: MSNChat }>({
  chat,
}: P): string {
  if (!chat) {
    return '';
  }
  return chat.title.charAt(0);
}
