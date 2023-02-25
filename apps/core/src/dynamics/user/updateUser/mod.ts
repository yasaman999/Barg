import { coreApp } from "../../../../mod.ts";
import { updateUserFn } from "./updateUser.fn.ts";
import { updateUserValidator } from "./updateUser.val.ts";

export * from "./updateUser.fn.ts";
export * from "./updateUser.val.ts";

export const updateUserSetup = () =>
  coreApp.acts.setAct({
    type: "dynamic",
    schema: "user",
    fn: updateUserFn,
    actName: "updateUser",
    validator: updateUserValidator(),
  });
