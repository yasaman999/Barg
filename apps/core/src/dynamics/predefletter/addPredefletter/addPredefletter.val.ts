import { preDefLetterInp } from "../../../../declarations/selectInp.ts";
import { number, object, string, boolean, array, optional, enums, date } from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addPredefletterValidator = () => {
    return object({
        set: object({
            title : string(),
            description : string(),
            number : number()
        }),
        get: selectStruct<preDefLetterInp>("preDefLetter", 1),
    });
};
