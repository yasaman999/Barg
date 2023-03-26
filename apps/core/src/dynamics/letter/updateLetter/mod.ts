import { coreApp } from "../../../../mod.ts";
import { updateLetterFn } from "./updateLetter.fn.ts";
import { updateLetterValidator } from "./updateLetter.val.ts";

export * from "./updateLetter.fn.ts";
export * from "./updateLetter.val.ts";

export const updateLetterSetup = () =>
  coreApp.acts.setAct({
    type: "dynamic",
    schema: "letter",
    fn: updateLetterFn,
    actName: "updateLetter",
    validator: updateLetterValidator(),
  });
