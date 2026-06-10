import requests, json, os
from dotenv import load_dotenv

# Load from .env.local (not .env)
load_dotenv('/home/andre/ah-digital-blog/.env.local')
token = os.environ.get('BUFFER_ACCESS_TOKEN') or os.environ.get('BUFFER_API_KEY')
print(f"Token loaded: {token[:10]}...")

# Instagram profile ID
ig_id = "8f6b197a2de6f88db9b2b2e9"

headers = {"Content-Type": "application/json", "Authorization": f"Bearer {token}"}

# Test token first
test = requests.post("https://api.buffer.com/graphql", headers=headers, json={
    "query": "query { user { id } }"
})
print(f"Test token: {test.status_code} - {test.text[:100]}")

posts = [
    {
        "text": """Blockchain não é complicado. É só um caderno que todo mundo pode ver e ninguém pode apagar.

Pensa comigo: você escreve algo. Outra pessoa escreve. Cada página nova aponta pra anterior. Se alguém tentar mudar uma página antiga, todo mundo percebe.

Blockchain resolve um problema antigo: como confiar em alguém que você nunca viu? Bancos, cartórios e governos existem pra isso. Blockchain faz o mesmo sem intermediário.

Não é sobre criptomoeda (embora tenha nascido lá). É sobre contratos, rastreamento, identidade digital.

A tecnologia ainda tá aprendendo a andar — mas quando correr, vai mudar mais coisas que a internet mudou.

📖 Leia o guia completo no blog (link na bio)""",
        "schedule": "2026-06-11T15:00:00-03:00"
    },
    {
        "text": """Ganhar dinheiro com cripto em 2026 não é overnigth de 1000%. É consistência.

Se você vê print de lucro, Porsche e "grupo vip de sinais": é golpe ou sorte. E sorte não é estratégia.

O que funciona:
1. Staking — 3-14% ao ano passivo
2. DCA — comprar todo mês um valor fixo
3. Aceitar crypto como pagamento nos seus serviços
4. Criar conteúdo sobre o assunto

Day trade, pump-and-dump, "moeda que vai explodir"? Estatisticamente, você perde dinheiro.

Cripto não é cassino. É tecnologia financeira. Trate como investimento, não como aposta.

💰 Guia completo com números no blog (link na bio)""",
        "schedule": "2026-06-12T15:00:00-03:00"
    },
    {
        "text": """Seu pequeno negócio é o alvo preferido de hackers.

Parece contraditório, mas é verdade. Grandes empresas têm times de segurança. Você tem um notebook com senha "123456".

O hacker quer: dados dos seus clientes, acesso ao WhatsApp Business, acesso às contas bancárias.

80% dos ataques são evitáveis com 3 medidas:
✅ Gerenciador de senhas (Bitwarden é grátis)
✅ Backup 3-2-1
✅ 2FA ativado em tudo

Menos de R$ 50 e 3 horas de setup.

🔒 Guia completo de segurança digital PME no blog (link na bio)""",
        "schedule": "2026-06-13T15:00:00-03:00"
    }
]

for i, post in enumerate(posts):
    print(f"\n--- Post {i+1} ---")
    
    mutation = """
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            status
            scheduledAt
        }
    }
    """
    
    variables = {
        "input": {
            "profileId": ig_id,
            "text": post["text"],
            "scheduledAt": post["schedule"]
        }
    }
    
    r = requests.post(
        "https://api.buffer.com/graphql",
        headers=headers,
        json={"query": mutation, "variables": variables}
    )
    print(f"Status: {r.status_code}")
    data = r.json()
    if "errors" in data:
        print(f"ERROR: {data['errors']}")
    else:
        print(f"✅ Created: {data.get('data', {}).get('createPost', {})}")
