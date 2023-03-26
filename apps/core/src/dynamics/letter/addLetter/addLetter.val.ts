import { letterInp } from "../../../../declarations/selectInp.ts";
import { number, object, string, boolean, array, optional, enums, date } from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addLetterValidator = () => {
    return object({
        set: object({
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
            lid : string()
        }),
        get: selectStruct<letterInp>("letter", 1),
    });
};
