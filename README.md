# :octocat: GIFS GIPHY - Pesquisador de imagens animadas 

O gerenciador é uma aplicação em frontend para pesquisa e renderização de imagens animadas baseado no site [giphy](https://giphy.com/)

## Entregas

:heavy_check_mark: Consumo da API do _giphy_ de acordo com a pesquisa. 

:heavy_check_mark: Layout responsivo.

:heavy_check_mark: Renderização das imagens.

:heavy_check_mark: Animação 360graus.

## :iphone: Aplicação 

<img src="https://user-images.githubusercontent.com/46378210/173581217-ec5c04bf-4dfa-41ac-8dcb-9f551086d7fa.png" width="500"/>

### Como executar a aplicação em ambiente local

#### 1. Diretamente na máquina

Clone o projeto:

```bash
$ git clone https://github.com/reginadiana/gifs-giphy
```

Instale as dependencias:

```
$ yarn install
```

Inicie:

```
$ yarn start
```

#### 2. Com docker

> Para usar o docker, é necessário que o `docker` e o `docker-compose` esteja instalado na máquina

Construa o container:
```
$ docker-compose build
```

Abra o terminal:
```
$ docker-compose run --rm --service-ports app bash  
```

Inicie: 

```
$ yarn start
```

A aplicação fica disponível na rota http://localhost:3001
