import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";



export const updateRefferValidator = () => {
  return object({
    set: object({
      _id: string(),
      number : number(),
      delivered : boolean(),
      // actions :
      type : enums(['inUnit', 'inOrg', 'outOrg']),
      created_at : optional(date()),
      updated_at : optional(date()),
      deadline : optional(date()),
      isMoving : boolean(),
      description : array(object({text : string(), viewed : boolean()})),
      reply : array(object({id : string(), text : string(), 
        viewed : boolean()})),
    }),
    get: selectStruct("reffer", { reffer: 1 }),
  });
};
