"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var ScrollToTop = function (_a) {
    var children = _a.children, pathname = _a.location.pathname;
    react_1.useEffect(function () {
        window.scrollTo(0, 0);
    }, [pathname]);
    return children;
};
exports.default = react_router_dom_1.withRouter(ScrollToTop);
//# sourceMappingURL=ScrollToTop.js.map