import requests, json, os
from dotenv import load_dotenv

load_dotenv('/home/andre/ah-digital-blog/.env')
token = os.environ.get('BUFFER_ACCESS_TOKEN')

# Instagram ID from last successful post
ig_id = "8f6b197a2de6f88db9b2b2e9"

posts = [
    {
        "caption": """Blockchain não é complicado. É só um caderno que todo mundo pode ver e ninguém pode apagar.

Pensa comigo: você escreve algo num papel. Depois outra pessoa escreve. Depois outra. Cada nova página aponta pra anterior. Se alguém tentar voltar e mudar uma página antiga, todo mundo percebe na hora.

É isso. Blockchain é um caderno compartilhado onde a verdade é da rede inteira, não de uma pessoa só.

Isso resolve um problema que existe desde que o mundo é mundo: como confiar em alguém que você nunca viu? Bancos, cartórios e governos existem pra isso. Blockchain faz a mesma coisa sem precisar de intermediário.

Não é sobre criptomoeda (embora tenha nascido lá). É sobre contratos, rastreamento de produtos, identidade digital, votação.

A tecnologia ainda está aprendendo a andar — mas quando aprender a correr, vai mudar mais coisas que a internet mudou.

Entendi bem errado? Discordou de algo? Me conta nos comentários que a gente debate. 👇

📖 Leia o guia completo (link na bio)""",
        "media": "/tmp/insta-blockchain.png",
        "now": False,
        "schedule": "2026-06-11T15:00:00-03:00"  # Qui 11/06 às 15h
    },
    {
        "caption": """Ganhar dinheiro com cripto em 2026 não é overnigth de 1000%. É consistência.

Se você abre o Instagram e vê print de lucro, Porsche e "grupo vip de sinais", tem duas possibilidades: é golpe ou é sorte. E sorte não é estratégia.

O que realmente funciona?

1. Staking — rendimento passivo de 3-14% ao ano
2. DCA — comprar todo mês um valor fixo (a única estratégia que funciona pra maioria)
3. Aceitar crypto como pagamento nos seus serviços (diferencial competitivo)
4. Conteúdo — escrever sobre o assunto (como este post)

O resto? Day trade, pump-and-dump, "moeda que vai explodir"? Estatisticamente, você perde dinheiro.

Cripto não é cassino. É tecnologia financeira. Trate como investimento de longo prazo, não como aposta de fim de semana.

💰 Guia completo com números e estratégias no blog (link na bio)""",
        "media": "/tmp/insta-cripto.png",
        "now": False,
        "schedule": "2026-06-12T15:00:00-03:00"  # Sex 12/06 às 15h
    },
    {
        "caption": """Seu pequeno negócio é o alvo preferido de hackers.

Parece contraditório, né? "Mas minha empresa é pequena, não tenho dados importantes."

É exatamente por isso que você é o alvo. Grandes empresas têm time de segurança, firewall de milhões e auditoria semanal. Você tem um notebook com senha "123456".

O que o hacker quer de você:
- Dados dos seus clientes
- Acesso ao WhatsApp Business
- Acesso às contas bancárias
- Seu servidor como trampolim pra atacar outras empresas

A boa notícia: 80% dos ataques são evitáveis com 3 medidas simples:
✅ Gerenciador de senhas (Bitwarden é grátis)
✅ Backup 3-2-1 (3 cópias, 2 mídias, 1 fora do escritório)
✅ 2FA ativado em tudo

Isso tudo custa menos de R$ 50 e umas 3 horas de setup.

Não é sobre ter medo. É sobre estar preparado.

🔒 Guia completo de segurança digital PME no blog (link na bio)""",
        "media": "/tmp/insta-seguranca.png",
        "now": False,
        "schedule": "2026-06-13T15:00:00-03:00"  # Sáb 13/06 às 15h
    }
]

headers = {"Content-Type": "application/json", "Authorization": f"Bearer {token}"}

for i, post in enumerate(posts):
    print(f"\n--- Post {i+1} ---")
    
    # 1. Upload media
    with open(post["media"], "rb") as f:
        upload = requests.post(
            "https://api.buffer.com/1/medias/upload.json",
            headers={"Authorization": f"Bearer {token}"},
            files={"file": (f"post{i}.png", f, "image/png")}
        )
    print(f"Upload: {upload.status_code}")
    
    if upload.status_code == 200:
        media_url = upload.json().get("url") or upload.json().get("media_url")
        print(f"Media URL: {media_url}")
    else:
        print(f"Upload error: {upload.text}")
        media_url = None
    
    # 2. Create post
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
            "text": post["caption"],
            "media": {"photo": media_url} if media_url else None,
            "scheduledAt": post["schedule"]
        }
    }
    
    r = requests.post(
        "https://api.buffer.com/graphql",
        headers=headers,
        json={"query": mutation, "variables": variables}
    )
    print(f"Post: {r.status_code}")
    data = r.json()
    print(json.dumps(data, indent=2))
    
    if "errors" in data:
        print(f"ERROR: {data['errors']}")
