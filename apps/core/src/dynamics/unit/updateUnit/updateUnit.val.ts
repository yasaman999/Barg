import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";



export const updateUnitValidator = () => {
  return object({
    set: object({
      _id: string(),
      name: string(),
      categories: array(string()),
    }),
    get: selectStruct("unit", { unit: 1 }),
  });
};
