# API Documentation - Paws Safety

## URL de Conexão com o Banco de Dados

Base URL: [https://dsm-g06-pi3-2024-2-production.up.railway.app/](https://dsm-g06-pi3-2024-2-production.up.railway.app/)

---

## Rotas Disponíveis

A API possui as seguintes rotas, todas com suporte aos métodos HTTP `GET`, `POST`, `PUT` e `DELETE`.

### Rotas Gerais

- **`/animais`**
- **`/ongs`**
- **`/imagensOngs`**
- **`/imagensAnimais`**
- **`/especies`**
- **`/racas`**
- **`/adocoes`**

#### Detalhes:

- **`GET` sem ID**: Retorna todos os registros da rota correspondente.
- **`GET` com ID**: Retorna o registro específico pelo ID.
- **`POST`**: Cria um novo registro.
- **`PUT` com ID**: Atualiza o registro correspondente ao ID fornecido.
- **`DELETE` com ID**: Remove o registro correspondente ao ID fornecido.

---

### Rotas Específicas

#### 1. **Espécies**
   - `GET /especies/nome/:nome`  
     Retorna as informações da espécie com o nome fornecido como parâmetro na URL.

#### 2. **Imagens**
   - **Animais**: 
     - `GET /imagensAnimais/animal/:id`  
       Retorna todas as imagens registradas para o animal com o ID fornecido.
   - **ONGs**:
     - `GET /imagensOngs/ong/:id`  
       Retorna todas as imagens registradas para a ONG com o ID fornecido.
   - **Armazenamento de Imagens**:
     - `POST /imagensAnimais` ou `POST /imagensOngs`  
       Requisitos para envio:
       - `id`: O ID do animal ou da ONG.
       - Um arquivo de imagem no campo `file` da requisição.  
       As imagens serão armazenadas na pasta `public` do back-end.

---

## Configuração Local

Se o projeto for executado localmente, siga as etapas a seguir para configurar corretamente as variáveis de ambiente e o servidor.

### Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
DATABASE_URL=<URL do MongoDB>
IMAGE_URL=http://localhost:9090
```
    Nota: Se a porta do servidor for alterada, atualize a variável IMAGE_URL para refletir a nova porta. Essa variável é responsável por gerenciar os cadastros de imagens tanto de ONGs quanto de animais.


### Configuração no app.js
No arquivo app.js, adicione ou ajuste a configuração para o acesso às imagens:

Acesso às Imagens via Servidor (Produção)
Se estiver utilizando o servidor em produção, certifique-se de incluir o seguinte código:

```app.js
/** ACESSO DAS IMAGENS ATRAVÉS DO SERVIDOR */
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use('/public', express.static(path.join(__dirname, 'public')));
```
#### Acesso às Imagens Localmente
Caso o projeto seja usado localmente, faça os ajustes a seguir:

1. Comente as linhas mencionadas acima:
    ```
    // app.use('/public', express.static(path.join(__dirname, 'public')));
    ```
2. Descomente e configure a linha abaixo, substituindo o caminho pelo diretório local onde o projeto é salvo.
    ```
    // app.use('/public', express.static(path.join('C:', 'Users', 'henri', 'OneDrive', 'Área de Trabalho', 'paws_safety3', 'DSM-G06-PI3-2024-2', 'back-end', 'src', 'public')));
    ```
    Nota: Substitua os valores do caminho apenas até o diretório DSM-G06-PI3-2024-2, mantendo as pastas back-end, src e public.


# IMPORTANTE
- Certifique-se de que o MongoDB está configurado e acessível.
- A pasta public deve ser criada no diretório src do back-end para armazenar as imagens de ONGs e animais.
- Use o URL base informado para interagir com a API.