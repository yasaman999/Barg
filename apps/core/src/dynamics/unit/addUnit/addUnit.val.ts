import { unitInp } from "../../../../declarations/selectInp.ts";
import { number, object, string, boolean, array, optional, enums, date } from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addUnitValidator = () => {
    return object({
        set: object({
            name: string(),
            categories : array(string()),

        }),
        get: selectStruct<unitInp>("unit", 1),
    });
};
