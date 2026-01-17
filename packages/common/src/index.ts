// Shared utilities and types
// This package will contain code shared between apps/web and apps/backend

export const APP_NAME = "Law App" as const;

export interface SharedUser {
  id: string;
  email: string;
  name?: string;
}
