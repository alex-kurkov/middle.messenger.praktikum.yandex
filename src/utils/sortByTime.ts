export function sortByTime(arr: MSNChatMessage[]): MSNChatMessage[] {
  return arr.sort(compapator);
}

function compapator(a: MSNChatMessage, b: MSNChatMessage): number {
  return new Date(a.time).getTime() - new Date(b.time).getTime();
}
