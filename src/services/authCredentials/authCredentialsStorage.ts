import { User } from "../../domain/Auth/authTypes";
import { storage } from "../storage/storage";

const AUTH_KEY = "@Auth";

async function set(ac: User): Promise<void> {
  await storage.setItem(AUTH_KEY, ac);
}

async function get(): Promise<User | null> {
  const ac = await storage.getItem<User>(AUTH_KEY);
  return ac;
}

async function remove(): Promise<void> {
  await storage.removeItem(AUTH_KEY);
}

export const authCredentialsStorage = { set, get, remove };
