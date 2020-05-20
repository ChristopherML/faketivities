"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = require("react");
var ActivityLIstItem_1 = require("./ActivityLIstItem");
var rootStore_1 = require("../../../app/stores/rootStore");
var ActivityList = function () {
    var rootStore = react_1.useContext(rootStore_1.RootStoreContext);
    var activitiesByDate = rootStore.activityStore.activitiesByDate;
    return (React.createElement(react_1.Fragment, null, activitiesByDate.map(function (_a) {
        var group = _a[0], activities = _a[1];
        return (React.createElement(react_1.Fragment, { key: group },
            React.createElement(semantic_ui_react_1.Label, { size: 'large', color: 'blue' }, group),
            React.createElement(semantic_ui_react_1.Item.Group, { divided: true }, activities.map(function (activity) { return (React.createElement(ActivityLIstItem_1.default, { key: activity.id, activity: activity })); }))));
    })));
};
exports.default = mobx_react_lite_1.observer(ActivityList);
//# sourceMappingURL=ActivityList.js.map