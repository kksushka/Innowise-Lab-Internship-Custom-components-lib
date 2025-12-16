"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const clsx_1 = __importDefault(require("clsx"));
const Modal_module_scss_1 = __importDefault(require("./Modal.module.scss"));
const Modal = ({ open, onClose, children, container }) => {
    if (!open)
        return null;
    const handleModalClick = (event) => {
        event.stopPropagation();
    };
    const target = container || document.body;
    return react_dom_1.default.createPortal((0, jsx_runtime_1.jsx)("div", { className: Modal_module_scss_1.default.backdrop, onClick: onClose, children: (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(Modal_module_scss_1.default.modal), onClick: handleModalClick, children: children }) }), target);
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map