import { BASE_URL } from "services/api/base-api";

export const getStaticFilePath = (path: Nullable<string>): Nullable<string> => {
  if (!path) {
    return path;
  }
  return `${BASE_URL}/resources/${encodeURIComponent(path)}`;
};
