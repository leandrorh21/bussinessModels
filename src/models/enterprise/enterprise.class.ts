import { GenericClass } from "../generic.class";
import { enterpriseDTO } from "./enterprise.dto";

export class Enterprise extends GenericClass<enterpriseDTO> {
  declare id: number;
  declare businessName: string;
  declare comercialName: string;
  declare countryID: number;
  declare cityID: number;
}
