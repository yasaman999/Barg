import { string, number, date, boolean, InRelation, OutRelation, object, optional } from "../../../deps.ts";

const gender = enums(["Male", "Female"]);
const ftu = enums(["create unit", "create chart", "read letters", "reffer letters", "add staff"]);
const ul = enums(["admin", "orghead", "manager", "staff", "guest"]);

export const userPure = {

  first_name: string(),
  last_name: string(),
  phone: number(),
  gender: gender,
  birth_date: optional(date()),
  personnel_code: string(),
  email: optional(string()),
  is_active: optional(boolean()),
  features : array(ftu),
  userLevels : ul,
  
};

  
const userInRel = {
  org : {
    schemaName : "org",
    type : "one",
  },
  unit : {
    schemaName : "unit",
    type : "one",
  }

};

const userOutRel = {};


export const users = () =>
  coreApp.odm.setModel(
    "user",
    userPure,
    userInRel ,//as Record<string, InRelation>,
    userOutRel,
  );




