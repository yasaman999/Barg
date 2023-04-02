import { refferInp } from "../../../../declarations/selectInp.ts";
import { number, object, string, boolean, array, optional, enums, date } from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addRefferValidator = () => {
    return object({
        set: object({
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
                viewed : boolean(),}))
        }),
        get: selectStruct<refferInp>("reffer", 1),
    });
};
