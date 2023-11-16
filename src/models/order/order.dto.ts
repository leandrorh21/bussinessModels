import { z } from "zod";

export const zodOrder = z.object({
  id: z.number(),
  trackCode: z.string(),
  enterpriseID: z.number(),
  statusID: z.number(),
  serviceID: z.number(),
  crossdocking: z.boolean(),
});

export type orderDTO = z.infer<typeof zodOrder>;
