/* This is the Application (general utility) router. */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');

module.exports = function ApplicationRouter(applicationController) {

    const router = express.Router();

    /* Parse HTTP request bodies as JSON */
    router.use(bodyParser.json());

    /* Log the request and send it to the next middleware function */
    router.use((req, res, next) => {
        console.info(`${req.method} ${req.url}`);
        next();
    });

    router.use((req, res) => {
        applicationController.asyncGetApiVersion()
            .then(
                (number) => {
                    res.setStatus(200).send({ 'version': number });
                },
                (issue) => {
                    res.setStatus(422).send(issue.message);
                }
            );
    });

    return router;
};
