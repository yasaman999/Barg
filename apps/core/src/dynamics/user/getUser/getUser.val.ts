import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";


export const getUserValidator = () => {
  return object({
    set: object({
      _id: string(), 
    }),
    get: selectStruct("user", { user: 1 }),
  });
};
