import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";



export const updateOrgValidator = () => {
  return object({
    set: object({
      _id: string(),
      name: string(),
      address: string(),
    }),
    get: selectStruct("org", { org: 1 }),
  });
};
