import { z } from "zod";
import { zodGeometryPoint } from "../geometryPoint";

//const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
//type Literal = z.infer<typeof literalSchema>;
//type Json = Literal | { [key: string]: Json } | Json[];
//const jsonSchema: z.ZodType<Json> = z.lazy(() =>
//z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
//);

export const zodEnterprise = z.object({
  id: z.number(),
  documentType: z.number(),
  documentNumber: z.string(),
  address: z.string(),
  point: zodGeometryPoint.nullish(),
  businessName: z.string(),
  comercialName: z.string(),
  status: z.number(),
  countryID: z.number(),
  cityID: z.number(),
  integration: z.boolean().nullish(),
  statusChangeDate: z.string().datetime({ offset: true }),
  // contactPeople: jsonSchema,
  enterpriseKey: z.string().uuid().nullish(),
  photo: z.string().nullish(),
  urlWebHook: z.string().nullish(),
  serviceIDs: z.number().array().nullish(),
  createdAt: z.string().datetime({ offset: true }),
  updatedAt: z.string().datetime({ offset: true }),
  deleted: z.boolean(),
  multiplace: z.boolean(),
});

export type enterpriseDTO = z.infer<typeof zodEnterprise>;
