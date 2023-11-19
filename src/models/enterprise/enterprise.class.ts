import { GenericClass } from "../generic.class";
import { geometryPointDTO } from "../geometryPoint";
import { enterpriseDTO } from "./enterprise.dto";

export class Enterprise extends GenericClass<enterpriseDTO> {
  declare id: number;
  declare documentType: number;
  declare documentNumber: string;
  declare address: string;
  declare point: geometryPointDTO;
  declare businessName: string;
  declare comercialName: string;
  declare status: number;
  declare countryID: number;
  declare cityID: number;
  declare integration: boolean;
  declare statusChangeDate: Date;
  // declare contactPeople: js
  declare enterpriseKey: string;
  declare photo: string;
  declare urlWebHook: string;
  declare serviceIDs: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deleted: boolean;
  declare multiplace: boolean;
}
