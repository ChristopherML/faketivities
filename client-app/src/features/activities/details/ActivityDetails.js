"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var activityStore_1 = require("../../../app/stores/activityStore");
var react_1 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
var LoadingComponent_1 = require("../../../app/layout/LoadingComponent");
var ActivityDetailedHeader_1 = require("./ActivityDetailedHeader");
var ActivityDetailedInfo_1 = require("./ActivityDetailedInfo");
var ActivityDetailedChat_1 = require("./ActivityDetailedChat");
var ActivityDetailedSidebar_1 = require("./ActivityDetailedSidebar");
var ActivityDetails = function (_a) {
    var match = _a.match, history = _a.history;
    var activityStore = react_1.useContext(activityStore_1.default);
    var activity = activityStore.activity, loadActivity = activityStore.loadActivity, loadingInitial = activityStore.loadingInitial;
    react_1.useEffect(function () {
        loadActivity(match.params.id);
    }, [loadActivity, match.params.id, history]);
    if (loadingInitial)
        return React.createElement(LoadingComponent_1.default, { content: 'Loading activity...' });
    if (!activity)
        return React.createElement("h2", null, "Activity not found");
    return (React.createElement(semantic_ui_react_1.Grid, null,
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 10 },
            React.createElement(ActivityDetailedHeader_1.default, { activity: activity }),
            React.createElement(ActivityDetailedInfo_1.default, { activity: activity }),
            React.createElement(ActivityDetailedChat_1.default, { activity: activity })),
        React.createElement(semantic_ui_react_1.Grid.Column, { width: 6 },
            React.createElement(ActivityDetailedSidebar_1.default, { activity: activity }))));
};
exports.default = mobx_react_lite_1.observer(ActivityDetails);
//# sourceMappingURL=ActivityDetails.js.map