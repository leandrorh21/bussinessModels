"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodOrder = void 0;
const zod_1 = require("zod");
const zodOrder = zod_1.z.object({
    id: zod_1.z.number(),
    trackCode: zod_1.z.string(),
    enterpriseID: zod_1.z.number(),
    statusID: zod_1.z.number(),
    serviceID: zod_1.z.number(),
    crossdocking: zod_1.z.boolean(),
});
exports.zodOrder = zodOrder;
