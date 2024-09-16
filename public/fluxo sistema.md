# Documento Explicativo do Fluxo do Sistema

## 1. **Visão Geral do Sistema**
O sistema foi desenvolvido para operar em **plataformas web e mobile**, oferecendo uma experiência responsiva em ambas. A plataforma possibilita que **administradores**, **funcionários** e **clientes** acessem, visualizem e gerenciem dados de agendamento e administração de lojas, de forma simplificada e intuitiva.

### 1.1. **Objetivos do Sistema**
O principal objetivo do sistema é fornecer uma solução completa para o gerenciamento de lojas, funcionários e agendamentos, com uma interface que se adapta tanto a dispositivos móveis quanto a desktops, garantindo eficiência em diferentes cenários de uso.

### 1.2. **Principais Usuários**
- **Administrador**: Responsável pelo gerenciamento completo da loja e seus funcionários. Este usuário tem acesso a todos os dados da loja, incluindo calendários, agendamentos, notificações, pagamentos e tokens de desconto/invite.
- **Funcionário**: Tem acesso ao seu próprio calendário, podendo ajustar suas configurações pessoais, como horários de almoço e tempo de atendimento. Também gerencia seus agendamentos.
- **Cliente**: Pode visualizar e agendar compromissos, além de ter acesso às informações da loja, como localização e detalhes de agendamentos futuros. Também pode receber notificações sobre seus compromissos via e-mail e WhatsApp.

---

## 2. **Funcionalidades e Fluxo de Usuários**

### 2.1. **Usuário Administrador**
#### 2.1.1. **Acesso e Login**
- O administrador pode acessar o sistema através de **login** usando Google, Microsoft ou e-mail e senha.
- Em caso de esquecimento de senha, há uma opção de **recuperação de senha** via e-mail.

#### 2.1.2. **Dashboard**
Após o login, o administrador é redirecionado para o **dashboard** principal, que oferece uma visão geral das principais funcionalidades:
- **Resumo das Lojas Cadastradas**: Exibe um painel com informações resumidas sobre todas as lojas cadastradas sob a conta do administrador.
- **Calendário Geral**: Visualização global dos agendamentos das lojas e dos funcionários.
- **Notificações Recentes**: Exibe notificações sobre alterações em agendamentos, novos funcionários cadastrados, novos tokens gerados, entre outros.

#### 2.1.3. **Visualização e Gerenciamento de Lojas**
O administrador pode acessar a área de **Gerenciamento de Lojas**, onde são exibidos todos os dados relacionados às lojas cadastradas:
- **Visualizar Lojas**: Exibe todas as lojas cadastradas em um formato de lista ou grid. Ao clicar em uma loja, o administrador tem acesso aos detalhes, incluindo:
  - **Nome da Loja**.
  - **Endereço Completo** (com link para o Google Maps).
  - **Horários de Funcionamento**: Horários predefinidos e personalizados para cada dia da semana.
  - **Funcionários Associados à Loja**: Lista de funcionários com a opção de visualizar o calendário individual de cada um.
  - **Calendário da Loja**: Mostra uma visão geral dos agendamentos feitos na loja, exibidos em formato diário, semanal ou mensal.
  
- **Cadastrar Novas Lojas**: O administrador pode adicionar uma nova loja ao sistema, fornecendo os seguintes dados:
  - **Nome da Loja**.
  - **Endereço** (com integração com Google Maps para validação e exibição).
  - **Horários de Funcionamento**: Definir os horários de abertura e fechamento para cada dia da semana.
  
- **Editar Lojas**: Possibilidade de alterar os dados cadastrados de uma loja, incluindo horário de funcionamento, nome e endereço.

#### 2.1.4. **Visualização e Gerenciamento de Funcionários**
Além da gestão de lojas, o administrador pode acessar a área de **Gerenciamento de Funcionários**:
- **Visualizar Funcionários**: Exibe todos os funcionários cadastrados na conta. Ao clicar em um funcionário, o administrador tem acesso a:
  - **Informações Pessoais**: Nome, e-mail, e telefone.
  - **Horários de Trabalho**: Definir e visualizar os horários em que o funcionário está disponível.
  - **Calendário Pessoal do Funcionário**: Exibe os agendamentos do funcionário de forma individual, podendo ser visualizados por dia, semana ou mês.
  
- **Cadastrar Novos Funcionários**: Possibilidade de adicionar novos funcionários, fornecendo os seguintes dados:
  - **Nome Completo**.
  - **E-mail**.
  - **Horários de Trabalho**: Dias e horários disponíveis.
  - **Tempos de Atendimento**: Definir quanto tempo cada atendimento dura para o funcionário.
  
- **Editar Funcionários**: Alterar as informações pessoais ou os horários de trabalho.

#### 2.1.5. **Notificações e Configurações**
- **Notificações de Agendamento**: O administrador recebe notificações quando um agendamento é criado, cancelado ou alterado. Essas notificações podem ser enviadas por e-mail ou exibidas diretamente no dashboard.
- **Configurações da Conta**: O administrador pode gerenciar suas próprias informações pessoais, como nome, e-mail e senha. Também pode definir preferências de notificação e integração com serviços externos, como WhatsApp.

#### 2.1.6. **Pagamentos e Tokens**
- **Pagamentos Automáticos**: O administrador pode realizar pagamentos automáticos para renovar ou adquirir novas lojas. Os métodos disponíveis incluem boleto, Pix e cartão de crédito.
- **Gerar Tokens de Desconto**: Possibilidade de gerar tokens de desconto para oferecer benefícios a novos usuários ou para si mesmo.
- **Gestão de Cobranças Recorrentes**: O administrador pode acompanhar o histórico de pagamentos e gerenciar as cobranças recorrentes, com a possibilidade de cancelamento ou alteração de método de pagamento.

---

### 2.2. **Usuário Funcionário**
#### 2.2.1. **Acesso e Login**
- O funcionário acessa o sistema utilizando suas credenciais (e-mail e senha) ou via login social (Google, Microsoft).

#### 2.2.2. **Dashboard do Funcionário**
Após o login, o funcionário é redirecionado ao seu **dashboard pessoal**, onde pode visualizar:
- **Resumo Diário**: Exibe os agendamentos do dia atual, com informações como nome do cliente, horário, e serviço agendado.
- **Calendário Pessoal**: Exibe o calendário completo do funcionário, com a possibilidade de alternar entre visualização diária, semanal ou mensal.

#### 2.2.3. **Gerenciamento de Horários**
- **Definir Horários de Almoço**: O funcionário pode configurar seus horários de pausa para almoço, garantindo que o sistema não permita agendamentos nesse período.
- **Definir Tempos de Atendimento**: O funcionário define o tempo necessário para cada atendimento, de forma que o sistema ajuste automaticamente os horários disponíveis.
- **Definir Dias Disponíveis**: O funcionário também pode escolher os dias da semana em que está disponível para trabalho. Esses dias serão exibidos automaticamente no calendário da loja para que os clientes possam agendar.

#### 2.2.4. **Gerenciamento de Agendamentos**
- **Visualizar Agendamentos**: O funcionário tem acesso completo aos seus agendamentos futuros e passados, podendo visualizar detalhes como nome do cliente, data, horário e serviço.
- **Alterar ou Cancelar Agendamentos**: O funcionário pode alterar ou cancelar agendamentos diretamente pelo sistema. Caso faça isso, deve fornecer uma justificativa, e o cliente será notificado automaticamente por e-mail ou WhatsApp sobre a mudança.

---

### 2.3. **Usuário Cliente**
#### 2.3.1. **Acesso e Login**
- O cliente pode acessar o sistema como **visitante** (sem necessidade de login) para visualizar lojas e serviços, ou pode se logar para realizar agendamentos. O login pode ser feito via Google, Microsoft ou e-mail e senha.

#### 2.3.2. **Visualização e Agendamento**
- **Visualizar Agendamentos**: Quando logado, o cliente pode visualizar todos os seus agendamentos futuros e passados. Cada agendamento exibe detalhes como:
  - **Data e Hora**.
  - **Nome do Funcionário**.
  - **Endereço da Loja** (com link para Google Maps).
  
- **Realizar Novos Agendamentos**: O cliente pode buscar uma loja e selecionar um funcionário para visualizar os horários disponíveis. Ao selecionar um horário, o sistema pedirá o login (se ainda não estiver logado), e o agendamento será confirmado.
  
- **Confirmação e Notificações**: Após a conclusão do agendamento, o cliente recebe uma confirmação por e-mail. Além disso, lembretes automáticos podem ser enviados antes do compromisso, por e-mail ou WhatsApp.

#### 2.3.3. **Busca de Lojas**
- O cliente pode buscar lojas usando um campo de pesquisa, filtrando por localização ou tipo de serviço oferecido. Se o cliente acessar o sistema por um link compartilhado por uma loja, ele será redirecionado diretamente para a página da loja ou para a página de agendamento, se a loja tiver apenas uma unidade.

---

## 3. **Fluxo de Navegação**

### 3.1. **Versão Web**
- **Tela Inicial**: A página inicial da versão web exibe um portfólio da loja, listando as principais funcionalidades e serviços oferecidos. Há também um botão de login no canto superior direito.
- **Após Login**:
  - **Administrador**: Redirecionado ao dashboard administrativo.
  - **Funcionário**: Redirecionado ao calendário pessoal.
  - **Cliente**: Redirecionado à página de agendamentos, onde pode visualizar compromissos ou buscar novas lojas.

### 3.2. **Versão Mobile**
- **Tela Inicial**: A tela inicial da versão mobile é focada no login. A primeira ação solicitada ao usuário é o login, que segue o mesmo fluxo da versão web.
- **Após Login**:
  - **Administrador**: Redirecionado ao dashboard, onde pode visualizar lojas e funcionários.
  - **Funcionário**: Redirecionado ao seu calendário pessoal.
  - **Cliente**: Acesso aos agendamentos e possibilidade de buscar lojas ou serviços.

---

## 4. **Funcionalidades Específicas**

### 4.1. **Visualização de Dados**
- **Administrador**: Visualização completa de todas as lojas, funcionários e seus calendários.
- **Funcionário**: Acesso ao calendário pessoal com todos os agendamentos.
- **Cliente**: Visualização de compromissos futuros e passados, com detalhes de horário e localização.

### 4.2. **Agendamento e Notificações**
- **Agendamento**: O sistema permite que clientes agendem compromissos com facilidade, com notificações de confirmação e lembretes.
- **Notificações**: Lembretes e confirmações podem ser enviados por e-mail ou WhatsApp.

### 4.3. **Pagamentos e Tokens**
- **Pagamentos**: O administrador pode realizar pagamentos automáticos para adquirir novas lojas ou renovar sua conta.
- **Tokens de Desconto**: Tanto administradores quanto clientes podem gerar tokens que oferecem descontos em novos serviços ou compras de planos.

---

## 5. **Design e Responsividade**
Todas as telas do sistema são desenvolvidas para serem **completamente responsivas**, garantindo uma experiência fluida tanto em dispositivos móveis quanto em desktops. Na versão mobile, o design prioriza o acesso rápido às principais funcionalidades, como login e agendamento, com telas simples e diretas.
