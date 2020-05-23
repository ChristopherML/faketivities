"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_1 = require("react");
var rootStore_1 = require("../../stores/rootStore");
var mobx_react_lite_1 = require("mobx-react-lite");
var ModalContainer = function () {
    var rootStore = react_1.useContext(rootStore_1.RootStoreContext);
    var _a = rootStore.modalStore, _b = _a.modal, open = _b.open, body = _b.body, closeModal = _a.closeModal;
    return (React.createElement(semantic_ui_react_1.Modal, { open: open, onClose: closeModal, size: 'mini' },
        React.createElement(semantic_ui_react_1.Modal.Content, null, body)));
};
exports.default = mobx_react_lite_1.observer(ModalContainer);
//# sourceMappingURL=ModalContainer.js.map