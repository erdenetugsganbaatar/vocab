import { DEFAULT_ERROR_MESSAGE } from "@/constants";

export const getErrorMessage = (error: any): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }

  return DEFAULT_ERROR_MESSAGE;
};
