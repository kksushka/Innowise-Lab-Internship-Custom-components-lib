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
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const Button = (_a) => {
    var { children, variant = 'contained', size = 'medium', className } = _a, props = __rest(_a, ["children", "variant", "size", "className"]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ className: (0, clsx_1.default)(Button_module_scss_1.default.button, Button_module_scss_1.default[variant], Button_module_scss_1.default[size], className) }, props, { children: children })));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map