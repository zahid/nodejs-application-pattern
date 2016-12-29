#### Description

Build an API with NodeJS with a great, small framework.

This is the NodeJS application pattern.

#### Quickstart

1. Install dependencies using `npm install`

2. Start the API server using `node server.js`
    ```
    node server.js
    API listening on port 9999
    ```

3. Send an HTTP request to the API server using `cURL`
    
    ```
    curl -X GET "http://localhost:9999" -v
    * Rebuilt URL to: http://localhost:9999/
    *   Trying 127.0.0.1...
    * Connected to localhost (127.0.0.1) port 9999 (#0)
    > GET / HTTP/1.1
    > Host: localhost:9999
    > User-Agent: curl/7.43.0
    > Accept: */*
    >
    < HTTP/1.1 200 OK
    < X-Powered-By: Express
    < x-api-version: 0
    < Date: Thu, 29 Dec 2016 03:19:17 GMT
    < Connection: keep-alive
    < Content-Length: 0
    <
    * Connection #0 to host localhost left intact
    ```

#### Pre-requisites
- [Docker for mac](https://docs.docker.com/engine/installation/mac/#/docker-for-mac) (although it should work on any docker installation)

#### Framework

The idea behind of this the popular MVC, implemented as router-controller-service chains:

- models using Promises to contain logic as **services** (in `services/`)
- **controllers** using Promises to contain chains of service methods (in `controllers/`)
- views as HTTP endpoints using **routers** (in `routers/`)

See [Wikipedia on MVC](https://en.wikipedia.org/wiki/Model–view–controller#Components)

##### File structure

```
├── config                         // Configuration files live here as JSON objects. 
│   └── config.json
├── controllers                    // Control application flow with methods that return Promises
│   ├── application.controller.js
│   └── index.js
├── node_modules
├── package.json
├── routers                        // HTTP endpoints exposed as ExpressJS router objects
│   ├── application.router.js
│   └── index.js
├── server.js                      // Entrypoint to the web server. Everything is included and injected here.
├── services                       // Control application logic with methods that return Promises
│   ├── application.service.js
│   └── index.js
└── to-do.md                       // Things I still have left to do
```

#### Tools
- Expressjs as a webserver
- Sinon & Mocha for testing
- A way to get configurations

#### How to

Persist a record to a database as a model
