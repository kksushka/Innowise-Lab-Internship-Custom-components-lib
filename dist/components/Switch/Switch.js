"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const Switch_module_scss_1 = __importDefault(require("./Switch.module.scss"));
const Switch = (_a) => {
    var { checked, onChange, disabled = false } = _a, props = __rest(_a, ["checked", "onChange", "disabled"]);
    return ((0, jsx_runtime_1.jsxs)("label", { className: (0, clsx_1.default)(Switch_module_scss_1.default.switch, disabled && Switch_module_scss_1.default.disabled), children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ type: "checkbox", checked: checked, disabled: disabled, onChange: onChange }, props)), (0, jsx_runtime_1.jsx)("span", { className: Switch_module_scss_1.default.slider })] }));
};
exports.Switch = Switch;
//# sourceMappingURL=Switch.js.map