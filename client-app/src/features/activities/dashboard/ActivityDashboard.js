"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityList_1 = require("./ActivityList");
var ActivityDetails_1 = require("../details/ActivityDetails");
var ActivityForm_1 = require("../form/ActivityForm");
var mobx_react_lite_1 = require("mobx-react-lite");
var activityStore_1 = require("../../../app/stores/activityStore");
var react_1 = require("react");
var ActivityDashboard = function () {
    var _a;
    var activityStore = react_1.useContext(activityStore_1.default);
    var editMode = activityStore.editMode, selectedActivity = activityStore.selectedActivity;
    return (React.createElement(semantic_ui_react_1.Grid, null,
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            React.createElement(ActivityList_1.default, null)),
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            selectedActivity && !editMode && (React.createElement(ActivityDetails_1.default, null)),
            editMode && React.createElement(ActivityForm_1.default, { key: ((_a = selectedActivity) === null || _a === void 0 ? void 0 : _a.id) || 0, activity: selectedActivity }))));
};
exports.default = mobx_react_lite_1.observer(ActivityDashboard);
//# sourceMappingURL=ActivityDashboard.js.map