import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";


export const getPositionsValidator = () => {
  return object({
    set: object({
    }),
    get: selectStruct("position", { position : 1 }),
  });
};
