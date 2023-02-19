import { userInp } from "../../../../declarations/selectInp.ts";
import { number, object, string, boolean, array, optional, enums, date } from "../../../../deps.ts";
import { selectStruct } from "../../../../mod.ts";

const gender = enums(["Male", "Female"]);
const ftu = enums([
  "create unit",
  "create chart",
  "read letters",
  "reffer letters",
  "add staff",
]);
const ul = enums(["admin", "orghead", "manager", "staff", "guest"]);
export const addUserValidator = () => {
    return object({
        set: object({
            first_name: string(),
            last_name: string(),
            phone: number(),
            gender: gender,
            birth_date: optional(date()),
            personnel_code: string(),
            email: optional(string()),
            is_active: optional(boolean()),
            features: array(ftu),
            userLevels: ul,
        }),
        get: selectStruct<userInp>("user", 1),
    });
};
