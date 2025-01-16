import { User } from "../../domain/Auth/authTypes";

export interface AuthCredentialsService {
  user: User | null;
  saveCredentials: (ac: User) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
