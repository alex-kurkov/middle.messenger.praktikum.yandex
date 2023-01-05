export function abbreviateUser (user: MSNUser): string {
  return `${user?.first_name.charAt(0)}${user?.second_name.charAt(0)}`;
}

export function abbreviateChat (chat: MSNChat): string {
  return chat.title.charAt(0)
}
