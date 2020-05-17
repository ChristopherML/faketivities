"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineDateAndTime = void 0;
exports.combineDateAndTime = function (date, time) {
    var timeString = time.getHours() + ':' + time.getMinutes() + ':00';
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var dateString = year + "-" + month + "-" + day;
    return new Date(dateString + ' ' + timeString);
};
//# sourceMappingURL=util.js.map