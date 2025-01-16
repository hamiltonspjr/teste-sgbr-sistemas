import { api } from "../../api/apiConfig";
import { AuthCredentialsAPI } from "./authTypes";

async function signIn(
  user: string,
  password: string
): Promise<AuthCredentialsAPI> {
  const response = await api.post("https://test-api-y04b.onrender.com/signIn", {
    user,
    password,
  });

  return response.data;
}

export const authApi = {
  signIn,
};
