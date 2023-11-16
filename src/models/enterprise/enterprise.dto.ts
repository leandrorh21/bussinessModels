import { z } from "zod";

export const zodEnterprise = z.object({
  id: z.number(),
  businessName: z.string(),
  comercialName: z.string(),
  countryID: z.number(),
  cityID: z.number(),
});

export type enterpriseDTO = z.infer<typeof zodEnterprise>;
