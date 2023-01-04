export const getStaticFile = (path: string): string => {
  return `https://ya-praktikum.tech/api/v2/resources/${encodeURIComponent(path)}`;
};
