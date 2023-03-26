import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";


export const getLetterValidator = () => {
  return object({
    set: object({
      _id: string(), 
    }),
    get: selectStruct("letter", { letter : 1 }),
  });
};
