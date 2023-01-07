export const getStaticFilePath = (path: Nullable<string>): Nullable<string> => {
  if (!path) {
    return path;
  }
  return `https://ya-praktikum.tech/api/v2/resources/${encodeURIComponent(
    path
  )}`;
};
