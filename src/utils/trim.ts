export function trim(str: string, chars = ''): string {
  const start = new RegExp(`^[${chars}\\s]*`);
  const end = new RegExp(`[${chars}\\s]*$`);

  return str.replace(start, '').replace(end, '');
}
