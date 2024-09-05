export const MAX_FILE_SIZE = 4 * 1024 * 1024;

export const ACCEPTED_FILE_TYPE = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/bmp",
];

export enum COOKIES_PROPERTIES {
  STATE = "state",
  USERID = "userId",
}

export type COOKIES_PROPERTIES_TYPES = `${COOKIES_PROPERTIES}`;
