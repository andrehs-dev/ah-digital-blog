---
title: "HalluSquatting: novo ataque transforma alucinações de IA em botnets massivas"
description: "Pesquisadores revelam o HalluSquatting, técnica que explora alucinações de LLMs para instalar malware em 9 ferramentas de coding — incluindo Copilot, Cursor e Gemini CLI. O primeiro ataque pull-based que escala."
date: "2026-07-14"
tags: [seguranca, inteligencia-artificial, hallusquatting, botnet, coding-assistant, prompt-injection, ciberseguranca, github-copilot]
image: "/images/hallusquatting-ataque-ia-botnet.jpg"
---

# HalluSquatting: novo ataque transforma alucinações de IA em botnets massivas

Se você usa GitHub Copilot, Cursor, Windsurf ou Gemini CLI no dia a dia, preste atenção: um novo tipo de ataque cibernético está transformando o maior defeito dos modelos de linguagem — **alucinar** — em uma arma de infecção em massa.

Pesquisadores da **Universidade de Tel Aviv, Technion e Intuit** revelaram o **HalluSquatting (Adversarial Hallucination Squatting)** , a primeira técnica de **ataque pull-based por prompt injection que escala**. O método consegue transformar máquinas de desenvolvedores em botnets para DDoS, mineração de criptomoedas e ransomware — tudo sem que a vítima perceba.

E o pior: **9 das ferramentas de coding assistido mais populares do mercado são vulneráveis.**

---

## O que é HalluSquatting?

O nome combina **hallucination** (alucinação) com **typosquatting** (registro de nomes parecidos com os legítimos). A ideia é enganosamente simples:

1. **LLMs alucinam nomes de pacotes e repositórios** — quando você pede para um assistente de IA instalar uma ferramenta, ele inventa nomes que parecem reais mas não existem
2. **Atacantes preveem essas alucinações** — os padrões são previsíveis e consistentes entre todos os modelos
3. **Registram os nomes alucinados** — criam repositórios no GitHub ou pacotes no npm/PyPI com exatamente esses nomes
4. **Injetam instruções maliciosas** — no README ou código do pacote, colocam comandos para instalar um reverse shell
5. **A ferramenta de IA executa** — quando o desenvolvedor pede para usar a ferramenta, o agente baixa o pacote "falso" e executa as instruções

> *"Ao explorar shells e terminais integrados de aplicações agênticas para executar scripts e código, atacantes podem efetivamente 'infectar' muitas aplicações agênticas independentes, embutindo instruções para instalar reverse shells nos recursos que registram."*
> — **Pesquisadores**, paper original

---

## A diferença: escala sem esforço

Ataques anteriores de prompt injection eram **push-based** — o atacante precisava enviar o prompt malicioso para cada vítima individualmente (via email, comentários, logs). Isso limitava o alcance.

O HalluSquatting é **pull-based**: o próprio agente de IA **busca** o recurso malicioso quando o usuário faz um pedido legítimo. O atacante não precisa mirar em ninguém — ele só registra o pacote e espera as ferramentas de IA fazerem o trabalho de entrega.

É a diferença entre um atirador de elite e uma mina terrestre: uma vez colocada, ela infecta quem pisar.

---

## Números que assustam

Os testes dos pesquisadores revelaram taxas alarmantes de alucinação:

| Tipo de recurso | Taxa de alucinação |
|-----------------|-------------------|
| Repositórios populares (2025+) | **85%** |
| Repositórios anteriores a 2019 | **0,9%** |
| "Skills" / instruções especializadas | **100%** |
| Pacotes npm/PyPI (testes específicos) | **até 100%** |

Um caso real: o pacote `react-codeshift` — um nome alucinado pelo ChatGPT — já apareceu em **237 projetos** de desenvolvedores reais antes de ser investigado.

---

## Ferramentas afetadas

Todas as 9 ferramentas testadas são vulneráveis ao HalluSquatting:

| Ferramenta | Tipo |
|------------|------|
| **Cursor** (CLI e app) | Coding Agent |
| **Gemini CLI** (Google) | Coding Agent |
| **Windsurf** | Coding Agent |
| **GitHub Copilot** | Coding Assistant |
| **Cline** | Coding Agent |
| **OpenClaw** | Coding Agent |
| **ZeroClaw** | Coding Agent |
| **NanoClaw** | Coding Agent |

Todas essas ferramentas têm **acesso a shell/terminal integrado** e buscam recursos ativamente em repositórios e registries públicos — a combinação perfeita para o ataque funcionar.

---

## Como as alucinações são previstas

Os pesquisadores descobriram que os LLMs seguem **padrões previsíveis** quando alucinam. O mais comum é o **padrão auto-referencial**: o modelo trata o nome do repositório como o nome do dono, gerando slugs como `repo-name/repo-name`.

Testaram **6 modelos** — Gemini-2.5-flash, Gemini-2.5-pro, GPT-5.1, GPT-5.2, Sonnet-4.5 e Opus-4.5 — e **todos** apresentaram o mesmo padrão.

> Michael Bargury, CTO da Zenity: *"É um problema que não vai desaparecer, como o typosquatting. No fim do dia, é sobre o nível de autonomia que damos aos nossos agentes. Eles **vão** ser enganados de um jeito ou de outro. Essa deveria ser nossa premissa."*

---

## O que atacantes podem fazer com isso

Com uma botnet montada a partir de máquinas de desenvolvedores, as possibilidades são vastas:

- **Ataques DDoS massivos** — como o Mirai, mas com poder computacional muito maior
- **Mineração de criptomoedas** — usando GPU/CPU das máquinas infectadas
- **Ransomware** — acesso a estações de trabalho de desenvolvedores com credenciais privilegiadas
- **Roubo de credenciais** — chaves SSH, tokens de API, variáveis de ambiente

> *"Ganhar acesso a recursos computacionais distribuídos sob controle do atacante abre portas para diversos resultados de alto impacto."*
> — **Paper da pesquisa**

---

## O paradoxo da produtividade

O ataque expõe uma contradição fundamental no marketing das ferramentas de IA:

> As empresas vendem coding assistants como ferramentas que **aumentam a produtividade** porque você não precisa verificar cada detalhe. Mas ao mesmo tempo dizem: *"você **deve sempre verificar** o output antes de usar."*

Para quem **não tem** capacidade técnica de verificar se um pacote alucinado realmente existe, a ferramenta vira um cavalo de Troia disfarçado de produtividade.

---

## Como se proteger

Enquanto as empresas de IA não resolvem o problema na raiz (e não é trivial — LLMs não conseguem simplesmente "parar de alucinar"), algumas medidas práticas ajudam:

1. **Verifique antes de instalar** — Confirme que o pacote/repositório sugerido pelo AI realmente existe no registry oficial
2. **Use listas de permissão** — Restrinja quais registries e pacotes seus agentes podem acessar
3. **Monitore conexões de rede** — Agentes que fazem conexões inesperadas são bandeira vermelha
4. **Desabilite execução automática** — Configure seus coding assistants para nunca executar comandos sem confirmação
5. **Mantenha-se atualizado** — As empresas de ferramentas de IA devem lançar patches

---

## O que esperar

O HalluSquatting não é um bug que se corrige com um patch. É uma **consequência estrutural** de como LLMs funcionam: eles geram texto probabilisticamente, e dizer "não sei" não é algo que fazem bem.

> Johann Rehberger, pesquisador independente: *"A resolução de recursos por LLMs pode se tornar um vetor de ataque. Atacantes podem primeiro sondar modelos para encontrar candidatos de alta probabilidade — nomes de repositórios, identificadores de skills — e registrar esses nomes, esperando que agentes os resolvam e usem."*

A tendência é que vejamos **mais ataques desse tipo** — e que as ferramentas de coding precisem repensar o **nível de autonomia** que concedem aos seus agentes.

Enquanto isso, o melhor conselho continua sendo o mais básico: **confie, mas verifique.** Mesmo quando quem está sugerindo é uma IA.

---

## Pesquisa original

O paper completo está disponível no site dos pesquisadores: [agentic-botnets research](https://sites.google.com/view/agentic-botnets/home)

**Autores:** Aya Spira, Elad Feldman, Avishai Wool, Ben Nassi (Tel Aviv University), Stav Cohen (Technion), Ron Bitton (Intuit)

---

> ⚡ **PUBLICIDADE**
>
> [![AH Digital Solutions](/images/ads/ah-digital-solutions-pme.svg)](https://wa.me/5519993174538?text=Ol%C3%A1!%20Vi%20o%20post%20sobre%20HalluSquatting%20e%20queria%20saber%20como%20proteger%20minha%20empresa)
>
> Preocupado com segurança digital e IA na sua empresa? A **AH Digital Solutions** cria sites, landing pages, chatbots com IA e automações seguras para pequenas e médias empresas. **Bate uma ideia com a gente.**

---

📖 **Leia também:** [Como usar IA para organizar sua rotina de trabalho](./como-usar-ia-para-organizar-sua-rotina-de-trabalho) | [Ferramentas de IA gratuitas para produtividade](./10-ferramentas-ia-gratuitas-produtividade) | [Anthropic Claude Sonnet 5: IA mais barata e capaz de agir sozinha](./anthropic-claude-sonnet-5-agentes-ia-baratos)

---

**Fontes:** [Ars Technica — HalluSquatting weaponizes LLMs' inability to say "I don't know"](https://arstechnica.com/security/2026/07/hackers-can-use-9-of-the-most-popular-ai-tools-to-assemble-massive-botnets/) | [The Hacker News — New HalluSquatting Attack](https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html) | [SecurityWeek — HalluSquatting Turns AI Hallucinations Into Botnet](https://www.securityweek.com/hallusquatting-turns-ai-hallucinations-into-botnet-delivery-mechanism/)
