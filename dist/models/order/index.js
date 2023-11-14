"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodOrder = exports.default = void 0;
var order_class_1 = require("./order.class");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(order_class_1).default; } });
var order_dto_1 = require("./order.dto");
Object.defineProperty(exports, "zodOrder", { enumerable: true, get: function () { return order_dto_1.zodOrder; } });
