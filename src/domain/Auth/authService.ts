import { authAdapter } from "./authAdapter";
import { authApi } from "./authApi";
import { User } from "./authTypes";

async function signIn(user: string, password: string): Promise<User> {
  try {
    const authCredentialsAPI = await authApi.signIn(user, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error: string | any) {
    throw new Error(error.response.data.message);
  }
}

export const authService = {
  signIn,
};
