import { coreApp } from "../../../../mod.ts";
import { updatePredefletterFn } from "./updatePredefletter.fn.ts";
import { updatePredefletterValidator } from "./updatePredefletter.val.ts";

export * from "./updatePredefletter.fn.ts";
export * from "./updatePredefletter.val.ts";

export const updatePredefletterSetup = () =>
  coreApp.acts.setAct({
    type: "dynamic",
    schema: "predefletter",
    fn: updatePredefletterFn,
    actName: "updatePredefletter",
    validator: updatePredefletterValidator(),
  });
