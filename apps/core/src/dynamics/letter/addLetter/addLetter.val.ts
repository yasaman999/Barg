import { letterInp } from "../../../../declarations/selectInp.ts";
import { number, object, string, boolean, array, optional, enums, date } from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addLetterValidator = () => {
    return object({
        set: object({
            number : number(),
            subject : string(),
            created_at : optional(date()),
            updated_at : optional(date()),
            delivered : boolean(),
            is_end : object({
                text : string(), // text || des ??
                done : boolean()
            }),
            tags : array(string()),
            lid : string()
        }),
        get: selectStruct<letterInp>("letter", 1),
    });
};
