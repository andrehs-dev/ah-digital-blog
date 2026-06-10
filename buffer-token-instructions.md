# buffer - troubleshooting

## Token antigo (funcionou 09/06, expirou 10/06)
Token: xsrN5nQzHWWF_6YTMjqYRjzWe-0m7i71DWcaQ9mP1LB

## Para gerar novo token
1. Ir em https://buffer.com/settings/integrations/apps
2. Gerar novo "Access Token"
3. Salvar no .env.local:
   ```
   BUFFER_ACCESS_TOKEN="novo_token_aqui"
   ```

## Profile ID do Instagram
8f6b197a2de6f88db9b2b2e9

## Para postar novamente
```bash
cd /home/andre/ah-digital-blog && python3 post-instagram-semana-v2.py
```
