import { useMutation } from "@tanstack/react-query";
import { MutationOptions } from "../../../infra/infraTypes";
import { User } from "../authTypes";
import { authService } from "../authService";
import { useAuthCredentials } from "../../../services/authCredentials/useAuthCredentials";

interface Variables {
  user: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<User>) {
  const { saveCredentials } = useAuthCredentials();
  const mutation = useMutation<User, Error, Variables>({
    mutationFn: ({ user, password }) => authService.signIn(user, password),
    retry: false,
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: (user) => {
      saveCredentials(user);
    },
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}
