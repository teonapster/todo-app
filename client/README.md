[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# TodoApp
This project developed just for personal fun and exersizing with some of the coolest technologies arround the Angular framework. Apart from the "fun" part there was a series of questions spinning arround in my head and finally push me to bring this small project to life.

1. Human memory is not that robust, how many times did you forget one of your critical daily todos? 
2. How many times did you find yourself following several steps & clicks just to log one simple todo through complicated platforms?
3. And how many times did you forget that one of your todos is logged in your mobile app which was not synchronized with your desktop app?

This project is not yet completed but its in a good shape to let you understand the main concept: 
![Demo image](https://github.com/teonapster/todo-app/blob/master/readme-snip.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Current stack
* Angular
* Rxjs
* NgRx
* Scss

## Git commit

After staging the desired files you can safely run `git cz` in order to add a proper commit message that has description/title/scope etc. Check commitizen for further details.

## Release new version

Run `npm run release -- --release-as minor|major|patch` to release a new version and also update changelog file.

### Push tag after release

After releasing new version you can run `git push --follow-tags origin master` to push your latest tag 

## Run the project
Since this project was created angular-cli its always enough to run `ng serve` and then open `http://localhost:4200`. Apart from that you need to run a backend which will be able to persist your todo list and also make it accessible through the web. Right now i am using a dummy backend through json-server app. In order to install it run `npm i --save -g json-server` (if you want you can add it in your local dependencies instead). So apart from the `ng serve` open a second terminal and run `json-server ./src/app/mock-data.json` in the root folder. Now the app should be alive

## Pending parts
Even if this project is presentable there are a couple of things to be added in the future:

### Backend
Right now i am working to replace the fake backend that i am using to C.R.U.D. the todo list items. This backend will use the following stuff
* NodeJs & Typescript lang,
* A simple ORM like typeorm,
* Mongodb,
* Express,
* Docker

### Authentication
Right now if you expose this app to WWW then you will notice that everyone will be able to modify your todos. Thus, i'll need to provide a secure authentication to keep your todos safe. In a simple form this could be even basic authentication but thats not my intention.

### Groups
Well you might also need to share your todos with the rest of your family, friends e.t.c. It would be great to know that your wife has already finished on of your shared todos right? So what i am thinking is to introduce two kind of todos:
* Private: your own ones,
* Shared: sharable todos with other users

### Make project public
When this project will reach version 1.0.0 i'll turn this project to public.
