# Teste

Esta é a minha solução para o desafio técnico proposto pela empresa SGBr Sistemas. O objetivo era desenvolver uma aplicação que consumisse uma API, permitindo ao usuário fazer login e visualizar uma lista de marcas de carros. Ao selecionar uma marca, o usuário seria direcionado para uma nova tela, onde uma lista de modelos dessa marca seria exibida.

## Funcionalidades

Foi desenvolvido as seguintes funcionalidades no app:

1. Login do usuário:

- O usuário pode realizar login no aplicativo

2. Tela Home:

- Exibição do nome do usuário
- Lista de marcas de carros disponíveis
- Botão para o usuário sair do aplicativo

3. Navegação para a Tela Model:

- Ao clicar em uma marca de carro na tela "Home", o usuário é direcionado para a tela "Model"

4. Tela Model:

- Exibição de uma lista de modelos de carros da marca selecionada na tela "Home"
- Possibilidade de voltar para a tela "Home" e escolher uma nova marca

5. Login automático

## Instalação

Para executar o projeto localmente, siga estas etapas:

1. Certifique-se de ter o ambiente React Native configurado em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. Navegue até o diretório do projeto através do terminal.
4. Execute o comando **npm install** para instalar as dependências.
5. Execute o comando npx expo start.
6. Selecione uma das opções de dispositivos que irá aparecer para rodar o app.

## Bibliotecas utilizadas

Durante o desenvolvimento do projeto, as seguintes bibliotecas foram utilizadas para aprimorar a funcionalidade e a aparência da aplicação:

- react-navigation: Biblioteca de navegação para gerenciar as transições entre telas.
- react-query: Biblioteca para gerenciamento de estado e cache de dados.
- zod: Utilizada para validação de dados, garantindo a integridade das informações.
- nativewind: Biblioteca para estilização de componentes.
- react-hook-form: Utilizada para gerenciar formulários de maneira eficiente.
- react-native-svg: Utilizada para renderizar gráficos SVG na aplicação.
- reanimated: Biblioteca para animações complexas e de alto desempenho.
- axios: Utilizada para realizar as requisições a api
- async Storage: Utilizada para salvar localmente os dados do usuário

## Demonstração

<image src="./assets/demo.gif" width= "375" height= "810" />
