"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootStoreContext = exports.RootStore = void 0;
var activityStore_1 = require("./activityStore");
var userStore_1 = require("./userStore");
var react_1 = require("react");
var mobx_1 = require("mobx");
var commonStore_1 = require("./commonStore");
var modalStore_1 = require("./modalStore");
mobx_1.configure({ enforceActions: 'always' });
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.activityStore = new activityStore_1.default(this);
        this.userStore = new userStore_1.default(this);
        this.commonStore = new commonStore_1.default(this);
        this.modalStore = new modalStore_1.default(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
//# sourceMappingURL=rootStore.js.map