"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityList_1 = require("./ActivityList");
var mobx_react_lite_1 = require("mobx-react-lite");
var activityStore_1 = require("../../../app/stores/activityStore");
var LoadingComponent_1 = require("../../../app/layout/LoadingComponent");
var react_1 = require("react");
var ActivityDashboard = function () {
    var activityStore = react_1.useContext(activityStore_1.default);
    react_1.useEffect(function () {
        activityStore.loadActivities();
    }, [activityStore]);
    if (activityStore.loadingInitial)
        return React.createElement(LoadingComponent_1.default, { content: 'Loading activity' });
    return (React.createElement(semantic_ui_react_1.Grid, null,
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            React.createElement(ActivityList_1.default, null)),
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            React.createElement("h2", null, "Activity Filters"))));
};
exports.default = mobx_react_lite_1.observer(ActivityDashboard);
//# sourceMappingURL=ActivityDashboard.js.map