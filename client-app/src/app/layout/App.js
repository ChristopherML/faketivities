"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var NavBar_1 = require("../../features/nav/NavBar");
var ActivityDashboard_1 = require("../../features/activities/dashboard/ActivityDashboard");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_router_dom_1 = require("react-router-dom");
var HomePage_1 = require("../../features/home/HomePage");
var ActivityForm_1 = require("../../features/activities/form/ActivityForm");
var ActivityDetails_1 = require("../../features/activities/details/ActivityDetails");
var NotFound_1 = require("./NotFound");
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var App = function (_a) {
    var location = _a.location;
    return (React.createElement(react_1.Fragment, null,
        React.createElement(react_toastify_1.ToastContainer, { position: 'bottom-right' }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: HomePage_1.default }),
        React.createElement(react_router_dom_1.Route, { path: '/(.+)', render: function () { return (React.createElement(react_1.Fragment, null,
                React.createElement(NavBar_1.default, null),
                React.createElement(semantic_ui_react_1.Container, { style: { marginTop: '7em' } },
                    React.createElement(react_router_dom_1.Switch, null,
                        React.createElement(react_router_dom_1.Route, { exact: true, path: '/activities', component: ActivityDashboard_1.default }),
                        React.createElement(react_router_dom_1.Route, { path: '/activities/:id', component: ActivityDetails_1.default }),
                        React.createElement(react_router_dom_1.Route, { key: location.key, path: ['/createActivity', '/manage/:id'], component: ActivityForm_1.default }),
                        React.createElement(react_router_dom_1.Route, { component: NotFound_1.default }))))); } })));
};
exports.default = react_router_dom_1.withRouter(mobx_react_lite_1.observer(App));
//# sourceMappingURL=App.js.map