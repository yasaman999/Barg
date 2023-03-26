import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";


export const getRefferValidator = () => {
  return object({
    set: object({
      _id: string(), 
    }),
    get: selectStruct("reffer", { reffer : 1 }),
  });
};
