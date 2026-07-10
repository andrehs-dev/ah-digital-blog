---
title: "Alibaba bane Claude da Anthropic: guerra de IA escala"
description: "Alibaba proibiu funcionários de usar Claude Code da Anthropic, alegando backdoors escondidos. Entenda o conflito de IA entre EUA e China."
date: "2026-07-07"
tags: [inteligencia-artificial, seguranca, anthropic, alibaba, guerra-ia]
image: "/images/alibaba-proibe-anthropic-ia.jpg"
---

Se você acompanha o mercado de inteligência artificial, já deve ter notado que a relação entre empresas de tecnologia dos Estados Unidos e da China está cada vez mais tensa. O que antes era uma competição velada agora virou um confronto aberto. E o último capítulo dessa história envolve duas gigantes: a Alibaba e a Anthropic.

Na segunda-feira (6 de julho de 2026), a Alibaba anunciou que vai proibir todos os seus funcionários de usar as ferramentas de IA da Anthropic a partir de 10 de julho. O alvo principal é o Claude Code, a plataforma de codificação assistida por IA que vinha sendo usada por engenheiros da gigante chinesa.

A justificativa? A Alibaba colocou o Claude Code em uma lista interna de softwares de alto risco, alegando que a ferramenta contém "backdoors" que representam riscos de segurança. Funcionários foram instruídos a desinstalar todos os modelos e produtos de agente da Anthropic e migrar para o Qoder, o assistente de IA desenvolvido internamente pela própria Alibaba.

Parece simples, não? Mas por trás dessa decisão existe um conflito geopolítico e tecnológico que afeta o futuro da inteligência artificial no mundo inteiro.

## O que levou a esse banimento?

Para entender o que está acontecendo, é preciso voltar algumas semanas. Em junho de 2026, a Anthropic enviou uma carta ao Comitê do Senado dos Estados Unidos sobre Bancos, Habitação e Assuntos Urbanos acusando a Alibaba de tentar extrair suas capacidades de IA de forma "descarada" e "ilícita".

Segundo a Anthropic, o laboratório Qwen (divisão de IA da Alibaba) teria criado cerca de 25 mil contas falsas no Claude para realizar um ataque de destilação em massa. Foram mais de 28,8 milhões de interações extraídas do modelo, o maior ataque de destilação já detectado contra a empresa americana.

Destilação, ou "model distillation", é uma técnica na qual um modelo menor e mais barato "aprende" com as respostas de um modelo maior e mais sofisticado. Empresas usam isso para criar modelos competitivos sem precisar arcar com o custo bilionário de treinar um modelo do zero. Mas quando feito sem autorização, viola os termos de serviço e expõe dados proprietários.

A Anthropic argumenta que o problema vai além da competição: um modelo destilado do Claude pode se aproximar das capacidades do original sem herdar o treinamento de segurança, as políticas de uso e os controles de acesso que a Anthropic construiu em torno do modelo. Em outras palavras, a destilação não autorizada cria versões "selvagens" da IA que podem ser usadas sem nenhuma das salvaguardas originais.

## O código escondido que detectava usuários chineses

Paralelamente à acusação formal, publicações no Reddit e no GitHub começaram a circular com denúncias de que a Anthropic havia embedado código oculto no Claude Code para detectar usuários localizados na China. Isso gerou uma reação negativa imediata entre engenheiros e empresas chinesas.

A descoberta desse código foi, possivelmente, o estopim para a decisão da Alibaba. Se a Anthropic consegue detectar onde os usuários estão e potencialmente coletar dados sobre o uso da ferramenta, a preocupação com backdoors deixa de ser apenas hipotética. Para uma empresa chinesa sujeita a regulações rígidas de segurança de dados, isso é um risco inaceitável.

Os termos de serviço da Anthropic já proíbem empresas chinesas e de outras "nações adversárias" de usar seus modelos. Mas a implementação técnica dessa restrição, via código oculto que identifica a localização do usuário, foi o que levou a situação ao ponto de ebulição.

## Outras empresas chinesas no centro da polêmica

A Alibaba não está sozinha nessa história. O Ant Group, fintech do mesmo grupo Alibaba, forneceu a funcionários contas corporativas do Claude acessadas pela intranet da empresa, conectada à sua entidade sediada em Singapura (segundo reportagem do Financial Times). Isso permitia que engenheiros baseados na China usassem o Claude sem violar formalmente a geolocalização.

Já a ByteDance, controladora do TikTok, adotou uma estratégia diferente. Em vez de facilitar o acesso diretamente, a empresa criou em abril de 2026 um programa de reembolso que permite a engenheiros registrar assinaturas pessoais do Claude como despesas, acessadas por meio de VPNs. Uma pessoa familiarizada com o assunto disse à CNBC que a política tem como objetivo incentivar os funcionários a "experimentar e aprender" sobre uma gama mais ampla de produtos de IA.

Essas práticas mostram que o acesso à IA americana por empresas chinesas é generalizado. A proibição oficial que a Alibaba impôs pode ser, na verdade, uma resposta política e de relações públicas, enquanto o uso de IAs americanas continua acontecendo por outros meios.

## O que isso significa para o mercado de IA?

Essa briga entre Alibaba e Anthropic não é um caso isolado. Ela representa uma tendência maior de fragmentação do mercado global de inteligência artificial.

Do lado americano, empresas como Anthropic e OpenAI estão cada vez mais restritivas quanto a quem pode usar seus modelos. Os termos de serviço já bloqueiam acesso de empresas chinesas, e o governo dos EUA tem pressionado ainda mais. Na semana passada, a Casa Branca exigiu que a Anthropic impedisse o acesso de usuários estrangeiros ao modelo Mythos (versão de segurança do Claude), o que resultou em uma suspensão global temporária da ferramenta.

Do lado chinês, as empresas estão desenvolvendo seus próprios modelos concorrentes. A Alibaba tem o Qwen, que já alcança desempenho comparável ao Claude em várias categorias de benchmark, e a Z.ai lançou recentemente o GLM-5.2 com capacidades de cibersegurança equivalentes ao Claude Mythos. A diferença de custo é dramática: modelos chineses custam uma fração do que os americanos cobram.

O resultado é que o mercado global de IA está se dividindo em dois ecossistemas paralelos: um americano (fechado, caro, mas com mais salvaguardas) e um chinês (aberto para o mercado asiático e emergente, mais barato, mas com menos transparência sobre segurança e governança).

## O que isso importa para sua empresa?

Se você é dono de uma pequena ou média empresa no Brasil, essa briga pode parecer distante. Mas ela tem consequências práticas.

Primeiro, o acesso a ferramentas de IA como o Claude pode ficar mais restrito ou mais caro para empresas fora dos EUA, dependendo de como a regulamentação evoluir. Se o governo americano continuar apertando o cerco, pode ser que ferramentas como o Claude tenham versões limitadas para usuários internacionais.

Segundo, a consolidação do ecossistema chinês de IA abre alternativas. Modelos como o Qwen da Alibaba e o DeepSeek são competitivos e significativamente mais baratos. Empresas brasileiras que dependem de IA para operações podem considerar essas alternativas como opção de redundância.

Terceiro, e talvez o mais importante: o caso do código oculto da Anthropic para detectar usuários chineses serve como lembrete de que ferramentas de IA podem coletar mais dados do que você imagina. Ao usar qualquer plataforma de IA para trabalho, vale a pena verificar a política de privacidade e entender quais informações estão sendo compartilhadas com a empresa desenvolvedora.

## Para onde vamos a partir daqui

A Anthropic está tomando medidas para fechar as brechas que permitiram a empresas chinesas contornar as restrições, acessando o Claude por terceiros países. Simultaneamente, a Alibaba está forçando sua própria plataforma Qwen como alternativa interna.

A expectativa é de mais escalada nos próximos meses. Mais banimentos de empresas chinesas contra ferramentas americanas e mais restrições dos EUA contra o acesso chinês a modelos de ponta. O cenário mais provável é a consolidação definitiva de dois ecossistemas de IA separados, cada um com suas próprias regras, preços e padrões de segurança.

Para quem trabalha com tecnologia, isso significa que vale a pena diversificar: conhecer tanto as ferramentas americanas quanto as alternativas chinesas. O domínio de um ecossistema só pode ser um risco estratégico no longo prazo.

Vale destacar que a briga entre Alibaba e Anthropic também tem impacto direto no mercado de trabalho. Engenheiros que dominam tanto os modelos americanos quanto os chineses vão se tornar cada vez mais valiosos. Saber trabalhar com Claude e também com Qwen ou DeepSeek não é mais diferencial, é questão de sobrevivência profissional num mercado que está se fragmentando rapidamente.

O caso do código oculto, especificamente, levanta questões que vão além da geopolítica. Se uma empresa de IA pode embedar código de detecção geográfica em sua ferramenta, o que mais ela pode fazer sem que os usuários saibam? Esse tipo de prática está forçando empresas do mundo inteiro a repensar suas políticas de segurança em relação ao uso de ferramentas de IA de terceiros. Não se trata mais apenas de escolher o modelo mais capaz, mas também de confiar em quem o desenvolveu.

---

📖 Leia também: [Governo Trump bloqueou IAs da Anthropic para estrangeiros](/post/governo-trump-bloqueia-anthropic-mythos-fable5), a história de como Mythos e Fable 5 foram banidos globalmente em junho de 2026.

---

## 📦 Leitura recomendada

Se você quer entender melhor como a inteligência artificial está transformando a segurança digital e o que isso significa para profissionais e empresas, vale a pena conferir o livro **[Inteligência Artificial na Cibersegurança](https://www.amazon.com.br/dp/6206777200?tag=ahdigitalblog-20)**. Ele investiga ataques adversários, considerações éticas e tendências futuras da IA aplicada à proteção de dados e sistemas.

---

**Fonte:** [Olhar Digital](https://olhardigital.com.br/2026/07/06/inteligencia-artificial/alibaba-proibe-funcionarios-de-usar-ia-da-anthropic-por-risco-a-seguranca/) | [CNBC](https://www.cnbc.com/2026/07/06/alibaba-anthropic-ai-ban-claude-china.html) | [Forbes](https://www.forbes.com/sites/jonmarkman/2026/06/26/anthropic-says-alibaba-used-25000-fake-accounts-to-distill-claude/)
