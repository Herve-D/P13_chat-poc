# P13 - chat-poc

Proof of Concept of chat app between a customer and customer service.

## Technologies used

* Java 17
* Spring Boot 3
* Maven
* Lombok
* WebSocket
* Angular 16

## Getting started

> git clone [https://github.com/Herve-D/P13_chat-poc](https://github.com/Herve-D/P13_chat-poc.git)

### Install dependencies

#### Backend :

> cd backend
> mvn clean install

#### Frontend :

> cd frontend
> npm install

### Run the project

#### Backend :

> mvn spring-boot:run

#### Frontend :

> ng serve

App is available at [localhost:4200](http://localhost:4200)

Launch 2 browser windows / tabs in order to have 2 websocket sessions.
Open the conversation in each one, you can now start chatting between them.
