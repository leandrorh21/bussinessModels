import { z } from "zod";

const zodOrder = z.object({
  id: z.number(),
  trackCode: z.string(),
  enterpriseID: z.number(),
  statusID: z.number(),
  serviceID: z.number(),
  crossdocking: z.boolean(),
});

type orderDTO = z.infer<typeof zodOrder>;

export { zodOrder, orderDTO };
