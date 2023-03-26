import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";


export const getUnitValidator = () => {
  return object({
    set: object({
      _id: string(), 
    }),
    get: selectStruct("unit", { org : 1 }),//
  });
};
