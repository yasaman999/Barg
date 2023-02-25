import { string, number, boolean, array, date, object, optional, enums} from "../../../../deps.ts";
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

export const updateUserValidator = () => {
  return object({
    set: object({
      _id: string(),
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
    get: selectStruct("user", { user: 1 }),
  });
};
