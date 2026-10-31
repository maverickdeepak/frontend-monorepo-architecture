import type { AuthUser } from "../domain/users.types";
import { apiClient } from "@commerceos/shared/api/client";

// this function is use for getting user info
export function fetchProfile() {
  return apiClient.get<AuthUser>("/api/me");
}

export function updateProfile(payload: Partial<AuthUser>) {
  return apiClient.patch<AuthUser>("/api/me", payload);
}
