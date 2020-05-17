"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityFormValues = void 0;
var ActivityFormValues = /** @class */ (function () {
    function ActivityFormValues(init) {
        this.id = undefined;
        this.title = '';
        this.category = '';
        this.description = '';
        this.date = undefined;
        this.time = undefined;
        this.city = '';
        this.venue = '';
        if (init && init.date) {
            init.time = init.date;
        }
        Object.assign(this, init);
    }
    return ActivityFormValues;
}());
exports.ActivityFormValues = ActivityFormValues;
//# sourceMappingURL=activity.js.map