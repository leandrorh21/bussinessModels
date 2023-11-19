import { z } from "zod";

export const zodGeometryPoint = z.object({
  type: z.string(),
  coordinates: z.number().array(),
});

export type geometryPointDTO = z.infer<typeof zodGeometryPoint>;
