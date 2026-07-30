export type Theme = "light" | "dark" | "system";

export type ApiError = {
  message: string;
  status?: number;
  code?: string;
};
