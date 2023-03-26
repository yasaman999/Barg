import { coreApp } from "../../../../mod.ts";
import { updateRefferFn } from "./updateReffer.fn.ts";
import { updateRefferValidator } from "./updateReffer.val.ts";

export * from "./updateReffer.fn.ts";
export * from "./updateReffer.val.ts";

export const updateRefferSetup = () =>
  coreApp.acts.setAct({
    type: "dynamic",
    schema: "reffer",
    fn: updateRefferFn,
    actName: "updateReffer",
    validator: updateRefferValidator(),
  });
