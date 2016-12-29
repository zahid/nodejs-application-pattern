/* This is the Application (general utility) service. */

'use strict';

module.exports = function(config) {

    const getApiVersion = () => {
        return config.api.version;
    };

    return {
        getApiVersion: getApiVersion
    };
};
