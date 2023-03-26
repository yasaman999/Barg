import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";



export const updateLetterValidator = () => {
  return object({
    set: object({
      _id: string(),
      number : number(),
      subject : string(),
      created_at : date(),
      updated_at : date(),
      delivered : boolean(),
      is_end : {
          text : string(), // text || des ??
          done : boolean()
      },
      tags : array(string()),
      lid : string(),
    }),
    get: selectStruct("letter", { letter: 1 }),
  });
};
