"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodEnterprise = void 0;
const zod_1 = require("zod");
const zodEnterprise = zod_1.z.object({
    id: zod_1.z.number(),
    businessName: zod_1.z.string(),
    comercialName: zod_1.z.string(),
    countryID: zod_1.z.number(),
    cityID: zod_1.z.number(),
});
exports.zodEnterprise = zodEnterprise;
