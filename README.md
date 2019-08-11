# REST API Using Node Express and PostgreSQL

## Install and Development

### Clone the repo and create .env file

```bash
git clone https://github.com/jorgeveranet/node-api.git && cd node-api

cp .env.example .env
```

### Open shell in the Docker Alpine container

```bash
docker-compose up --build
docker-compose run --rm --service-ports node-api
```

#### Available development commands

```bash
npm run dev   # starts the api in development mode [nodemon]

npm t         # run all jest tests

```

#### Production

```bash
npm start     # starts the api in production mode
```

### Docker

We use **docker-compose.yml** and **Dockerfile.dev** for the setup and support of the development eviroment.

For production use **Dockerfile**.
