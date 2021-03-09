# Restaurant Application

The idea behind this project is to provide a complete backend API used along with the frontend restaurant application.

![](doc/demo.gif)

## Application Content

* [Main Libaries](#main-libaries)
* [Mock](#mock)
* [Environment](#environment)
* [MongoDB Connection](#mongodb-connection)
* [Application](#application)
* [Middlewares](#middlewares)
* [Routes](#routes)
* [Schemas](#schemas)
* [Controllers](#controllers)
* [Integration](#integration)
* [How to Run](#how-to-run)

## Main Libaries

* Express
* MongoDb / Mongoose
* Typescript
* Webpush


## Mock

If you don't want to create a mongoDb cloud database, yhen you can test this API using mock data only.\
You just need to enable the attribute <strong>useMock</strong> inside the <strong>environment.ts</strong> file.\
After that all the endpoints will return a static data, so all routers are intercepeted using a middleware (more details below).


## Environemnt

This file defines important settings for database and push notification.
    
* mongodb - connection string used to open a database connection.
* pushNotification - define public/private token used to allow send user notifications to the client application.
* token - private key used to encode the user password.


## MongoDB Connection

For this application we're using the mongodb atlas which is a cloud version of the datatbase.\
However, you can also set up your own local mongodb database structure and replace the connection string defined inside the <strong>environment.ts</strong> file.

Checkout the documentation and create your own cloud database for free:\
[Set up your MongoDB Atlas - Getting Started](https://docs.atlas.mongodb.com/getting-started/)\
Example of connection string: mongodb+srv://your-user:<password>@cluster.rhp27.mongodb.net/<dbname>?retryWrites=true&w=majority


In this project we have used simple queries, advanced aggregation, standard methods like find, create, update and also custom methods implemented in the schemas.


## Application

The file where we bootstrap the application exposing an single instance of the express application.\
Besides that, the class sets up all API's routes, initialize the database connection and also apply all prime middlewares, 
such as, cors (to avoid cross domain issue) and gzip compression (light responses).\


## Middlewares

Functions used to intercept any request and response in order to transform data, grant authorization or execute any side effect functionalities.\
In this project we are using a middleware to uncode a token sent through frontend header page, 
validate if it's a valid token and only after that proceed with the original request, or response back as a 403 error to notify that the user is not authorized.

## Routes

Define all endpoints that will be called by the fronentd application, in this file we also can apply middlewares in order to guard controllers logic that can be accessed only by authenticated user.\
From this point we define the controller method that will be responsible for processing the logic and respond back to the client.

## Schemas

Layer where we pre define the database structure and all interfaces used to help with that.\
As in this project we are using mongodb, we expose the entire model based on these schemas, so it can be used in the controller layer in order to query or modify the data.


## Controllers

The core business layer, the entire logic of the application is handled there.\
We provide a base controller class that encapsulates success and error responses to keep consistent all messages sent back to the application.\
In this layer we also deals with queries and prepare the expected object communicating directly with the database schemas.

The application was split up in different controllers, such as:

* Order\
Provides functionalities to fetch all orders saved by the authenticated user, create a new one and also review.

* Product\
Provides a single functionality to fetch all products pre populated in the database.

* User\
Provides functionalities to authenticate, register, sign and also save the push notification permission.

## Integration

Auxiliar functions available to reset and repopulate the database keeping it fresh whenever you want.\
As in this demo project we don't provide any CMS application, at least there is a logic in place to register more than 50 products.\
We also provide a script to send push notification message to all user registered in the application, so you can test the PWA service workers developed in the forntend application.


<br/>

Run this preset script in order to populate the database with 50 products.\
This script drop the database and repopulate product collection using fresh ids.

```
npm run integration
```
<br/>

Run this preset script in order to send push notifications to the registered users.\
This screen loop all users and verify if the push permission was grantted, if it was, then you can write a custom message to them.
```
npm run notification
```


You also can change the current web push notification configuration if you want.\
There is a script in place that generates a valid vapid, so you just need to replace the push notification tokens inside <strong>environment.ts</strong> file.\
Keep in mind that the public token should be added into the frontend project to match with the new settings.
```
npm run vapid
```

## How to Run
This is the backend application only, this project provides some API's integrated with a real cloud database.

In order to have it runing along with a frontend application, you need to follow the steps for further settings.

<br/>

Install all necessary packages.
```
npm install
```
<br/>

Initialize the application
```
npm start
```





