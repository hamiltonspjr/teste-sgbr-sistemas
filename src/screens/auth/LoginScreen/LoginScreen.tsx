import React from "react";
import { View } from "react-native";
import { Text } from "../../../components/Text/Text";
import { Screen } from "../../../components/Screen/Screen";
import { AuthScreenProps } from "../../../routes/navigationTypes";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";
import { Button } from "../../../components/Button/Button";

export function LoginScreen({}: AuthScreenProps<"LoginScreen">) {
  const { control, formState, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      user: "",
      password: "",
    },
    mode: "onChange",
  });

  function submitForm({ user, password }: LoginSchemaType) {
    //TODO: implementar lógica de login
  }

  return (
    <Screen scrollable>
      <View className="px-6">
        <Text preset="headingLarge" className="mb-2">
          Olá
        </Text>
        <Text preset="paragraphLarge" className="mb-10">
          Digite seu nome de usuário e senha para entrar
        </Text>

        <FormTextInput
          control={control}
          name="user"
          label="Usuário"
          placeholder="Digite seu usuário"
          className="mb-2.5"
        />
        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          className="mb-12"
        />
        <Button
          title="Entrar"
          onPress={handleSubmit(submitForm)}
          disabled={!formState.isValid}
        />
      </View>
    </Screen>
  );
}
