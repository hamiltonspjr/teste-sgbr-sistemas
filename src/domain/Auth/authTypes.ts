export interface User {
  id: number;
  name: string;
  token: string;
}

export interface AuthCredentialsAPI {
  error: boolean;
  user: {
    id: number;
    name: string;
    token: string;
  };
}
