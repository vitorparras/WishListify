# Sistema de Lista de Presentes de Casamento 🎁👰🤵

Este projeto é uma aplicação web que permite aos noivos criarem e compartilharem uma lista de presentes de casamento com seus convidados. A plataforma facilita a escolha dos presentes, a realização de pagamentos via Pix e a organização da lista de presentes.

## Funcionalidades Principais

### 1. Página Inicial
A página inicial serve como ponto de partida tanto para os noivos quanto para os convidados.

- Banner inicial explicativo sobre o sistema.
- Botões de ação:
  - "Criar Lista de Presentes" (para noivos).
  - "Acessar Lista de Casamento" (para convidados).
- Login social (Google, Facebook, etc.).

### 2. Cadastro de Usuário
Os noivos podem criar uma conta para gerenciar suas listas de presentes.

- **Campos**: Nome completo, e-mail, senha, confirmação de senha.
- **Validações**: Segurança para campos de e-mail e senha.
- **Login social**: Integração com Google e Facebook.

### 3. Criação de Lista de Presentes
Os noivos podem personalizar sua lista de presentes de casamento.

- **Funcionalidades**:
  - Adicionar nome do presente.
  - Upload de imagem do presente.
  - Definir preço do presente.
  - Definir quantidade disponível (caso haja múltiplas unidades).
  - Adicionar chave Pix ou método de pagamento.
- Opções para editar, remover e visualizar a lista de presentes.

### 4. Compartilhamento da Lista
Os noivos podem compartilhar a lista de presentes com seus convidados.

- **Geração de Link**: Criação de uma URL única para a lista de presentes.
- **Geração de QR Code**: Para compartilhamento fácil via imagem.
- Integração com redes sociais para compartilhamento (WhatsApp, Facebook, Instagram).

### 5. Página da Lista de Presentes (Convidados)
Os convidados podem visualizar e selecionar os presentes.

- **Componentes**:
  - Banner com informações do casamento.
  - Lista de presentes com nome, foto, valor e quantidade disponível.
  - Botão "Dar este presente" para cada item.
  - Métodos de pagamento:
    - Pagar via Pix (exibe chave Pix e instruções).
    - "Vou comprar pessoalmente" (reserva sem pagamento imediato).
- Campos para o convidado inserir o nome ou uma mensagem personalizada para os noivos.

### 6. Fluxo de Pagamento
Facilita o processo de pagamento e confirmação pelos convidados.

- **Pop-up de confirmação**:
  - Exibe as opções de pagamento (Pix, transferência bancária, compra pessoal).
  - Campo para o nome do doador.
  - Botão de confirmação para registrar o pagamento.
- Após a confirmação:
  - O presente é destacado com borda verde ou marcado como "Pago".
  - A quantidade disponível é atualizada.

### 7. Controle de Quantidade
Controla a quantidade de presentes disponíveis para itens com múltiplas unidades.

- Coluna "Quantidade Disponível" ao lado dos itens.
- Quando o limite é atingido, o item é destacado como "Esgotado" ou "Completo".

### 8. Administração da Lista de Presentes (Noivos)
Os noivos podem acompanhar o status da lista de presentes.

- **Dashboard**:
  - Visão geral da lista.
  - Detalhes de quem reservou ou comprou presentes.
  - Opções de adicionar, editar ou remover itens.
- **Notificações**:
  - E-mails ou push notifications para avisar quando presentes forem selecionados ou comprados.

## Integração de Pagamentos

### Chave Pix
- Exibição da chave Pix dos noivos diretamente na página de presentes.
- Instruções claras sobre como proceder com a transferência.

### Pagamento Alternativo
- Suporte a links para outros métodos de pagamento (PayPal, transferência bancária).

### Verificação de Pagamento
- Os convidados confirmam o pagamento manualmente após a transação.
- Possibilidade de integração futura para verificação automática via API.

## Notificações e Alertas
Informações para noivos e convidados sobre o progresso da lista.

- **Notificações por e-mail**: Para confirmar reservas ou compras.
- **Lembretes automáticos**: Para convidados que ainda não finalizaram a compra após a reserva.

## Segurança e Privacidade
Proteção das informações sensíveis dos usuários.

- **Criptografia de dados**: Chaves Pix e informações bancárias protegidas.
- **Autenticação**: Login seguro para noivos e convidados.
- **Configurações de privacidade**: Opções para tornar a lista pública ou restrita a convidados específicos.

## Usabilidade e Design
Interface amigável e intuitiva.

- **Design Responsivo**: Funciona bem em dispositivos móveis e desktop.
- **Layout Simples e Minimalista**: Fácil navegação e escolha de presentes.
- **Suporte a Múltiplos Idiomas**: Para atender usuários de diferentes regiões.

## Relatórios e Estatísticas
Fornece informações detalhadas para os noivos.

- Relatórios com número de presentes selecionados/comprados.
- Exportação da lista de presentes e informações dos doadores.
- Relatório final pós-casamento com uma visão geral das contribuições dos convidados.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b minha-nova-funcionalidade`).
3. Faça as modificações desejadas e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie um pull request para revisão.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
