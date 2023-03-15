import { coreApp } from "../../../../mod.ts";
import { updateOrgFn } from "./updateOrg.fn.ts";
import { updateOrgValidator } from "./updateOrg.val.ts";

export * from "./updateOrg.fn.ts";
export * from "./updateOrg.val.ts";

export const updateOrgSetup = () =>
  coreApp.acts.setAct({
    type: "dynamic",
    schema: "org",
    fn: updateOrgFn,
    actName: "updateOrg",
    validator: updateOrgValidator(),
  });
