import { coreApp } from "../../../../mod.ts";
import { updatePositionFn } from "./updatePosition.fn.ts";
import { updatePositionValidator } from "./updatePosition.val.ts";

export * from "./updatePosition.fn.ts";
export * from "./updatePosition.val.ts";

export const updatePositionSetup = () =>
  coreApp.acts.setAct({
    type: "dynamic",
    schema: "position",
    fn: updatePositionFn,
    actName: "updatePosition",
    validator: updatePositionValidator(),
  });
