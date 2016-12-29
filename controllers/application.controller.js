/* This is the Application (general utility) controller. */

'use strict';

module.exports = function(applicationService) {

    /**
     * Async method that returns a promise with the result or rejects with a message.
     * This describes the normal use of the controller calling and returning the result from
     * */
    const asyncGetApiVersion = () => {
        return new Promise((resolve, reject) => {
            resolve(applicationService.getApiVersion());
        });
    };

    return {
        asyncGetApiVersion: asyncGetApiVersion
    };
};
