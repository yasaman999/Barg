export * from "./addLetter.fn.ts";
export * from "./addLetter.val.ts";

import { coreApp } from "../../../../mod.ts";
import { addLetterFn } from "./addLetter.fn.ts";
import { addLetterValidator } from "./addLetter.val.ts";
export const addLetterSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "letter",
        fn: addLetterFn,
        actName: "addLetter",
        validator: addLetterValidator(),
    });
