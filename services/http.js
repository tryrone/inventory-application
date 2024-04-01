/**
 * HttpService
 *
 * File with application specific utility functions
 */

const needle = require('needle');

needle.defaults({ open_timeout: 30000, read_timeout: 90000 });

module.exports = {

    /**
     * @function _post
     * @param url
     * @param data
     * @param options
     *
     * @return Promise
     */
    post(url, data, options) {
        return new Promise((resolve, reject) => {
            needle.post(url, data, options,
                (err, response) => ((err) ? reject(err) : resolve(response)));
        });
    },


    /**
     * @function get
     * @param url
     *
     * @return Promise
     */
    get(url, options) {
        return new Promise((resolve, reject) => {
            needle.get(url, options, (err, response) => ((err) ? reject(err) : resolve(response)));
        });
    },

    /**
     * @function put
     * @param url
     * @param data
     * @param options
     */
    put(url, data, options) {
        return new Promise((resolve, reject) => {
            needle.put(url, data, options,
                (err, response) => ((err) ? reject(err) : resolve(response)));
        });
    },

    /**
     * Check that a request's result has an acceptable 2xx code (one of 200 and 201)
     * @param {core.NeedleResponse} response An HTTP call response
     *
     * @return {boolean}
     */
    statusCodeIs2xx: (response) => !!(response && [200, 201].includes(response.statusCode)),


};
