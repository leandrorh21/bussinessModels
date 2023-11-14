"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodEnterprise = exports.default = void 0;
var enterprise_class_1 = require("./enterprise.class");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(enterprise_class_1).default; } });
var enterprise_dto_1 = require("./enterprise.dto");
Object.defineProperty(exports, "zodEnterprise", { enumerable: true, get: function () { return enterprise_dto_1.zodEnterprise; } });
