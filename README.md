# 🛰️ Simulação de Dispositivos IoT

Este projeto consiste em um script simples desenvolvido em **Node.js** para simular o comportamento de envio de dados de múltiplos dispositivos IoT (Internet of Things). O objetivo é coletar métricas de desempenho, analisar taxas de perda e avaliar o impacto no sistema hospedeiro.

## 📋 Funcionalidades

- Simulação de 5 a 20 dispositivos.
- Simulação de latência de rede aleatória (50ms - 300ms).
- Simulação de falhas de envio (taxa de erro configurável).
- Coleta de métricas: Tempo médio, Taxa de perda e Impacto no Sistema.

## 🚀 Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório ou baixe o arquivo `simulacao_iot.js`.
3. Abra o terminal na pasta do arquivo e execute:


### 2. Métricas Coletadas

| Métrica | Valor Obtido |
| :--- | :--- |
| **⏱️ Tempo Médio de Envio** | `0.1738s` |
| **📉 Taxa de Perda** | `10.00%` |
| **💻 CPU Utilizada** | `43%` |
| **🧠 RAM Utilizada** | `12,2 GB (51%)` |

### 3. Impacto no Sistema (Print)
*Captura de tela do Gerenciador de Tarefas durante a execução:*

![Print do Monitoramento do Sistema](print_sistema.png)



## 🧠 Explicação do Código e Funções

Este projeto utiliza recursos nativos do **Node.js** para criar uma simulação realista sem depender de bibliotecas externas. Abaixo estão as principais funções utilizadas:

### 1. `async` e `await` (Controle de Fluxo)
Utilizados para gerenciar a natureza assíncrona da simulação.
- **Por que foi usado?** Diferente de um loop comum que trava o processamento, o `await` pausa a execução apenas daquela iteração específica, simulando o tempo de espera real de um dispositivo aguardando resposta do servidor.

### 2. `Promise` e `setTimeout` (Função Sleep)
Foi criada uma função utilitária `sleep` que encapsula o `setTimeout` dentro de uma `Promise`.
```javascript
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

```bash
node simulacao_iot.js
