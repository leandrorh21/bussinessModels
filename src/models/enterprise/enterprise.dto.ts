import { z } from "zod";

const zodEnterprise = z.object({
  id: z.number(),
  businessName: z.string(),
  comercialName: z.string(),
  countryID: z.number(),
  cityID: z.number(),
});

type enterpriseDTO = z.infer<typeof zodEnterprise>;

export { zodEnterprise, enterpriseDTO };
