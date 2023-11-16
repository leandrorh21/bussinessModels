import { GenericClass } from "../generic.class";
import { orderDTO } from "./order.dto";

export class Order extends GenericClass<orderDTO> {
  declare id: number;
  declare trackCode: string;
  declare enterpriseID: number;
  declare statusID: number;
  declare serviceID: number;
  declare crossdocking: boolean;
}
