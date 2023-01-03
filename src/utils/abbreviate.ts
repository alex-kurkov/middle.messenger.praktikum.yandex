export function abbreviate(user: MSNUser): string {
  return `${user?.first_name.charAt(0)}${user?.second_name.charAt(0)}`;
}
