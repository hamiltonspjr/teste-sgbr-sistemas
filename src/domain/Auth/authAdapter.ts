import { AuthCredentialsAPI, User } from "./authTypes";

function toAuthCredentials(authCredentialsAPI: AuthCredentialsAPI): User {
  return {
    id: authCredentialsAPI.user.id,
    name: authCredentialsAPI.user.name,
    token: authCredentialsAPI.user.token,
  };
}

export const authAdapter = { toAuthCredentials };
