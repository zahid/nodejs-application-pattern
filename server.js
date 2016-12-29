/* This is the entrypoint to the application programmer interface */

'use strict';

/* Catch and log uncaught exceptions as soon as they happen, log them, then exit with error code 1 */
process.on('uncaughtException', (e) => {
    console.error(`An uncaughtException happened:\n${e}`);
    process.exit(1);
});

const config = require('./config/config.json');

/* Instantiate an expressjs webserver */
const express = require('express');
const app = express();

/* Import all controllers */
const controllers = require('./controllers');

/* Import all routers */
const routers = require('./routers');

/* Import all services */
const services = require('./services');

/* Instantiate the services */
const applicationService = new services.ApplicationService(config);

/* Instantiate the controllers */
const applicationController = new controllers.ApplicationController(applicationService);

/* Instantiate the routers */
const applicationRouter = new routers.ApplicationRouter(applicationController);

/* Bind the applicationRouter to ALL incoming HTTP requests */
app.use(applicationRouter);

/* Error handling middleware */
app.use((error, req, res, next) => {
    /* Probably want to remove this when running in production */
    res.status(500).send(error);
});

/* Have the broker server listen on config.webserverPort */
app.listen(config.webserver.port, () => console.log('API started') );
