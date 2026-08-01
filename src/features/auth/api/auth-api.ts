import { apiPost } from "@/lib/api";
import type { LoginInput } from "@/features/auth/schemas/login-schema";

type AuthSuccessResponse = {
  success: true;
};

export function login(input: LoginInput): Promise<AuthSuccessResponse> {
  return apiPost<AuthSuccessResponse, LoginInput>("/auth/login", input);
}

export function logout(): Promise<AuthSuccessResponse> {
  return apiPost<AuthSuccessResponse>("/auth/logout");
}
