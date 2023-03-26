import { coreApp } from "../../../../mod.ts";
import { updateUnitFn } from "./updateUnit.fn.ts";
import { updateUnitValidator } from "./updateUnit.val.ts";

export * from "./updateUnit.fn.ts";
export * from "./updateUnit.val.ts";

export const updateUnitSetup = () =>
  coreApp.acts.setAct({
    type: "dynamic",
    schema: "unit", //
    fn: updateUnitFn,
    actName: "updateUnit",
    validator: updateUnitValidator(),
  });
