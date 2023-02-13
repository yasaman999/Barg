import { coreApp } from "../../../../../apps/core/mod.ts";
import {
  array,
  boolean,
  date,
  enums,
  InRelation,
  number,
  optional,
  string,
} from "../../../deps.ts";
const gender = enums(["Male", "Female"]);
const ftu = enums([
  "create unit",
  "create chart",
  "read letters",
  "reffer letters",
  "add staff",
]);
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
  features: array(ftu),
  userLevels: ul,
};

const userInRel: Record<string, InRelation> = {
  org: {
    schemaName: "org",
    type: "one",
    optional: false,
  },
  unit: {
    schemaName: "unit",
    type: "one",
    optional: false,
  },
};

const userOutRel = {};

export const users = () =>
  coreApp.odm.setModel(
    "user",
    userPure,
    userInRel, // as Record<string, InRelation>,
    userOutRel,
  );
