---
title: "Google transforma celulares antigos em data centers de IA"
description: "Google e UCSD criam clusters com 2.000 Pixels descartados para computação em nuvem. Desempenho supera servidores tradicionais em testes."
date: "2026-06-19"
tags: [ia, google, sustentabilidade, data-centers, inovacao]
image: "/images/google-celulares-antigos-data-centers-ia.svg"
---

Você troca de celular a cada três ou quatro anos. O iPhone que ficou lento. O Android que a bateria já não segura. O Pixel que você aposentou porque a câmera nova era melhor. E todos eles foram parar em uma gaveta, em um centro de reciclagem ou, pior, em um aterro sanitário.

Agora imagina o seguinte: e se esses celulares, em vez de virarem lixo eletrônico, pudessem se transformar em pequenos servidores rodando inteligência artificial?

Pois o Google descobriu que sim. E já está fazendo isso.

## O projeto que recicla celulares como servidores de IA

Em parceria com a Universidade da Califórnia em San Diego (UCSD), o Google anunciou um projeto chamado "phone cluster computing", computação em cluster com smartphones. A ideia é simples: pegar milhares de Pixels que seriam descartados, extrair as placas-mãe, agrupar em clusters e transformar tudo em uma plataforma de computação em nuvem de baixo carbono.

O plano atual é instalar um data center com 2.000 smartphones Pixels no campus da UCSD ainda neste semestre. Esse cluster equivale a cerca de 50 servidores tradicionais e vai atender mais de 100 turmas de ciência da computação ao mesmo tempo.

E não é teoria. Um teste inicial com apenas 20 celulares já conseguiu manter picos de submissão de trabalhos para uma turma de 75 alunos, com latência de processamento menor que um backend hospedado na AWS.

## O problema que isso resolve

O setor de tecnologia tem um problema grave de sustentabilidade. Em 2022, o mundo gerou 62 milhões de toneladas de lixo eletrônico, um número que deve chegar a 82 milhões de toneladas até 2030, segundo a ONU. Desse total, apenas 22% foi reciclado de forma documentada. O resto vai parar em aterros, muitas vezes em países em desenvolvimento, onde o descarte acontece sem controle ambiental adequado.

A situação fica ainda mais crítica quando olhamos para os números da computação. Data centers já consomem cerca de 1% da eletricidade global, e a projeção é que esse número dobre até 2030 por causa da corrida da inteligência artificial. Treinar um modelo grande de IA pode emitir tanto carbono quanto cinco carros ao longo de toda a vida útil deles.

E o problema não é só a eletricidade que os servidores usam para funcionar. Boa parte da emissão de carbono associada à computação vem da fabricação do hardware, o chamado "carbono incorporado" ou embodied carbon. Fabricar um chip, soldar componentes, montar placas, transportar tudo isso pelo mundo. Cada etapa tem um custo ambiental que não aparece na conta de luz do data center.

É aí que a ideia do Google faz sentido. Segundo a própria empresa, 50% do carbono incorporado de um smartphone está na placa-mãe. A tela, a bateria e o corpo do aparelho correspondem aos outros 50%. Se você descarta a carcaça mas reaproveita a placa-mãe, está cortando pela metade o impacto ambiental de cada dispositivo reaproveitado. Em escala de 2.000 unidades, isso equivale a uma economia expressiva de emissões que simplesmente não existiriam se fosse necessário fabricar 50 servidores novos do zero.

## Como funciona na prática

O processo é mais simples do que parece. Os engenheiros do Google, trabalhando com pesquisadores da UCSD, desenvolveram um método para:

1. Desmontar os smartphones, removendo tela, bateria, câmeras e carcaça. Tudo que não é necessário para processamento é separado para reciclagem convencional.
2. Extrair a placa-mãe, o coração do celular, com processador, memória RAM e armazenamento, que permanece intacto.
3. Substituir o Android por uma distribuição Linux genérica. O sistema operacional é trocado por um Linux otimizado para servidores. Isso desliga proteções do sistema que são úteis para consumidores (como o "low memory killer", que encerra apps pesados automaticamente) mas só atrapalham em ambiente de data center.
4. Agrupar em clusters de 25 a 50 placas, cada cluster equivale a um servidor tradicional. As placas são gerenciadas por Kubernetes, a mesma tecnologia que orquestra containers em data centers profissionais.

O resultado: cada cluster funciona como um servidor. O sistema aceita containers, distribui carga entre os dispositivos e escala conforme a demanda. Tudo o que um data center normal faz, só que com hardware que antes iria para o lixo.

## Desempenho: celular x servidor

O desempenho dos smartphones modernos é mais competitivo com servidores tradicionais do que a maioria das pessoas imagina. Em testes de benchmark SPEC, os núcleos de performance do Pixel Fold de 2023 igualaram ou superaram servidores como o ASUS RS720A-E11, uma máquina de data center de verdade.

O que um servidor tem de vantagem? Muitos núcleos e muita memória RAM (dezenas de núcleos, centenas de GB de RAM). Um smartphone tem de 8 a 12 GB de RAM e alguns núcleos de alta performance. Mas para tarefas que cabem nessa memória, o processamento é tão rápido quanto ou mais.

Isso significa que uma aplicação precisa caber em 8-12 GB de RAM. É um limite, com certeza. Mas para uma quantidade enorme de cargas de trabalho acadêmicas, científicas e de inferência de modelos menores de IA, esse espaço é mais que suficiente.

## 2.000 celulares = 50 servidores

No data center da UCSD, 2.000 Pixels vão formar o equivalente a 50 servidores. Parece pouco? Depende do que você está comparando. A universidade planeja usar essa capacidade para dar suporte a mais de 100 turmas de computação simultaneamente, incluindo sistemas, programação paralela, ciência de dados e projetos de IA.

O custo desse tipo de processamento é uma fração do que seria necessário para comprar servidores novos. E o impacto ambiental é quase zero em termos de fabricação de novo hardware.

## O que isso significa para o mercado

Para quem trabalha com tecnologia, essa notícia tem um recado claro. A indústria está chegando a um ponto em que a escalabilidade não depende mais só de comprar hardware novo. Reutilizar o que já existe não é só marketing verde, está se tornando uma estratégia viável tecnicamente.

Empresas menores dificilmente vão montar seus próprios data centers de celulares descartados. Mas o movimento indica que o custo de entrada para computação de IA pode cair nos próximos anos. Se universidades e centros de pesquisa conseguem processar cargas significativas com hardware reaproveitado, provedores de nuvem vão sentir pressão para oferecer alternativas mais baratas e sustentáveis.

Para o pequeno empreendedor, o efeito prático é indireto mas real. Serviços de IA que hoje custam caro podem ficar mais acessíveis conforme a infraestrutura por trás deles se torna mais barata e distribuída. E a sustentabilidade que antes era diferencial começa a se tornar requisito básico.

## Projetos semelhantes e tendências

O Google não é o primeiro a experimentar com hardware reaproveitado. A Foxconn já testou clusters com minicomputadores para servidores leves. Empresas como a Packet fabricam switches e roteadores com hardware commodity. Mas o projeto dos Pixels é o primeiro a pegar produtos de consumo descartados, não hardware de servidor desativado, e transformá-los em infraestrutura produtiva.

A diferença fundamental é que celulares descartados são um recurso abundante e praticamente gratuito. Enquanto servidores desativados têm mercado secundário e valor residual, smartphones aposentados são lixo eletrônico na maioria dos casos. Se o modelo do Google se provar escalável, cada Pixel descartado vira um ativo, não um passivo ambiental.

## O futuro da computação sustentável

O data center da UCSD com 2.000 Pixels deve começar a operar no segundo semestre de 2026. Jennifer Switzer e David Patterson, pesquisadores do Google que lideram o projeto, dizem que o potencial de expansão é enorme. Se o modelo funcionar em escala universitária, pode ser replicado em instituições de ensino, centros de pesquisa e até empresas que geram grande volume de resíduo eletrônico.

Uma das perguntas que ficam é sobre confiabilidade. Smartphones não foram projetados para funcionar 24 horas por dia, 7 dias por semana, durante anos, como servidores. Os pesquisadores reconhecem que o hardware consumidor pode ter taxas de falha mais altas que hardware empresarial. Mas a arquitetura com Kubernetes e containers consegue contornar isso com redundância: se um nó cai, a carga é redistribuída automaticamente. No fim das contas, o que importa é o cluster como um todo, não cada dispositivo individualmente.

Outra questão é a segurança. Um celular que roda Android tem uma série de proteções que um servidor Linux não precisa. A troca de sistema operacional elimina muitas dessas complexidades. Mas ainda é preciso garantir que dados sensíveis não vazem entre containers rodando no mesmo cluster de celulares. O Google afirma que a arquitetura padrão de isolamento de containers resolve isso, mas é um ponto que merece atenção conforme o projeto escala.

No longo prazo, a computação não precisará de hardware novo para crescer. Ela poderá ser alimentada pelos dispositivos que já existem e que hoje viram lixo. Isso junta duas tendências que raramente andam juntas: inovação em IA e responsabilidade ambiental.

---

## 📦 Produto recomendado

Se você se interessa por tecnologia sustentável e quer montar seu próprio mini servidor em casa para aprender, vale a pena conhecer um Raspberry Pi 5, um computador do tamanho de um cartão de crédito que consome pouca energia e serve como excelente laboratório para aprender sobre clusters, Kubernetes e computação distribuída.

👉 **[Raspberry Pi 5 na Amazon](https://www.amazon.com.br/dp/B0CTQ3R6P4?tag=ahdigitalblog-20)**

---

**Fonte:** [Canaltech - Google começou a usar celulares antigos para criar data centers do Gemini](https://canaltech.com.br/hardware/google-comecou-a-usar-celulares-antigos-para-criar-data-centers-do-gemini/)
