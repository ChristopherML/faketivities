"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.defaults.baseURL = 'http://localhost:5000/api';
var responseBody = function (response) { return response.data; };
var sleep = function (ms) { return function (response) {
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(response); }, ms); });
}; };
var requests = {
    get: function (url) { return axios_1.default.get(url).then(sleep(1000)).then(responseBody); },
    post: function (url, body) { return axios_1.default.post(url, body).then(sleep(1000)).then(responseBody); },
    put: function (url, body) { return axios_1.default.put(url, body).then(sleep(1000)).then(responseBody); },
    del: function (url) { return axios_1.default.delete(url).then(sleep(1000)).then(responseBody); }
};
var Activities = {
    list: function () { return requests.get('/activities'); },
    details: function (id) { return requests.get("/activities/" + id); },
    create: function (activity) { return requests.post('/activities', activity); },
    update: function (activity) { return requests.put("/activities/" + activity.id, activity); },
    delete: function (id) { return requests.del("/activities/" + id); }
};
exports.default = {
    Activities: Activities
};
//# sourceMappingURL=agent.js.map