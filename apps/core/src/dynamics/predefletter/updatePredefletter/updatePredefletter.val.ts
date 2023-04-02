import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";



export const updatePredefletterValidator = () => {
  return object({
    set: object({
      _id: string(),
      title : string(),
      description : string(),
      number : number()
    }),
    get: selectStruct("preDefLetter", { preDefLetter: 1 }),
  });
};
