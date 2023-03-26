import { positionInp } from "../../../../declarations/selectInp.ts";
import { number, object, string, boolean, array, optional, enums, date } from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addPositionValidator = () => {
    return object({
        set: object({
            name: string()
        }),
        get: selectStruct<positionInp>("position", 1),
    });
};
