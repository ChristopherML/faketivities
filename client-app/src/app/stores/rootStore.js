"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootStoreContext = exports.RootStore = void 0;
var activityStore_1 = require("./activityStore");
var userStore_1 = require("./userStore");
var react_1 = require("react");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.activityStore = new activityStore_1.default(this);
        this.userStore = new userStore_1.default(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
//# sourceMappingURL=rootStore.js.map