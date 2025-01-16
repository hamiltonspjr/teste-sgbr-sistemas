import React, { createContext, useEffect, useState } from "react";
import { AuthCredentialsService } from "../authCredentialsType";
import { User } from "../../../domain/Auth/authTypes";
import { authCredentialsStorage } from "../authCredentialsStorage";

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  user: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        setUser(ac);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: User): Promise<void> {
    authCredentialsStorage.set(ac);
    setUser(ac);
  }

  async function removeCredentials(): Promise<void> {
    authCredentialsStorage.remove();
    setUser(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{ user, isLoading, saveCredentials, removeCredentials }}
    >
      {children}
    </AuthCredentialsContext.Provider>
  );
}
