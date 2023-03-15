import { orgInp } from "../../../../declarations/selectInp.ts";
import { number, object, string, boolean, array, optional, enums, date } from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";

export const addOrgValidator = () => {
    return object({
        set: object({
            name: string(),
            address : string(),
        }),
        get: selectStruct<orgInp>("org", 1),
    });
};
