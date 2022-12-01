import { lesan, MongoClient, string, number, date,boolean, InRelation, OutRelation, object, ActFn, optional } from "https://deno.land/x/lesan@v-11.0.66/mod.ts";

const gender = enums(["Male", "Female"]);

const userPure = {

  first_name: string(),
  last_name: string(),
  phone: number(),
  gender: gender,
  birth_date: optional(date()),
  personnel_code: string(),
  email: optional(string()),
  is_active: optional(boolean()),
  
};

const userInRel = {};

const userOutRel = {};


export const users = () =>
  coreApp.odm.setModel(
    "user",
    userPure,
    userInRel ,//as Record<string, InRelation>,
    userOutRel,
  );




