"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var ActivityList_1 = require("./ActivityList");
var ActivityDetails_1 = require("../details/ActivityDetails");
var ActivityForm_1 = require("../form/ActivityForm");
var ActivityDashboard = function (_a) {
    var activities = _a.activities, selectActivity = _a.selectActivity, selectedActivity = _a.selectedActivity, editMode = _a.editMode, setEditMode = _a.setEditMode, setSelectedActivity = _a.setSelectedActivity, createActivity = _a.createActivity, editActivity = _a.editActivity, deleteActivity = _a.deleteActivity;
    return (React.createElement(semantic_ui_react_1.Grid, null,
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            React.createElement(ActivityList_1.default, { activities: activities, selectActivity: selectActivity, deleteActivity: deleteActivity })),
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            selectedActivity && !editMode && (React.createElement(ActivityDetails_1.default, { activity: selectedActivity, setEditMode: setEditMode, setSelectedActivity: setSelectedActivity })),
            editMode && React.createElement(ActivityForm_1.default, { key: selectedActivity && selectedActivity.id || 0, setEditMode: setEditMode, activity: selectedActivity, createActivity: createActivity, editActivity: editActivity }))));
};
exports.default = ActivityDashboard;
//# sourceMappingURL=ActivityDashboard.js.map