# :octocat: What is App

The goal was to create an application where the user would type something in the input and view gifs related to what was written.

Baseado em: https://giphy.com/

## Functionalities

:heavy_check_mark: API consumption

:heavy_check_mark: Responsive Layout

:heavy_check_mark: Show gifs based on the balue typed in the input 

## Deploy

You can access the application at https://allgifs.netlify.app/

:warning: The API resquest don't worry in production envolviment, just local envolvement :sorry: 

### :iphone: Layout 

![layout](https://user-images.githubusercontent.com/46378210/77700644-5549d880-6f93-11ea-9a8b-0a2b34772c21.png)

## Resources

- React
- Antdsign
- API of [Giphy](https://giphy.com/) 

## How to run application

Clone this project:

```
git clone https://github.com/reginadiana/api-giffs
```

Install dependeces and run with:

```
$ cd api-giff
$ yarn install
$ yarn start
```

## Running with docker 

Container build

```
$ docker-compose build
```

Running application
```
$ docker-compose up
```

Open docker terminal
```
$ docker-compose run --rm --service-ports app bash  
```

Is possible to see the response of local request acessing http://localhost:3001

If you can and wanted give me some **feedback** about my project or README.md, send me a **Pull Requests**. Advices are many welcome and constructive for me :smile:

Give me a **Star** if this project help or inspired you somehow :star:
