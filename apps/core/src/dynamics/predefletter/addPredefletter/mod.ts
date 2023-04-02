export * from "./addPredefletter.fn.ts";
export * from "./addPredefletter.val.ts";

import { coreApp } from "../../../../mod.ts";
import { addPredefletterFn } from "./addPredefletter.fn.ts";
import { addPredefletterValidator } from "./addPredefletter.val.ts";
export const addPredefletterSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "preDefLetter",
        fn: addPredefletterFn,
        actName: "addPredefletter",
        validator: addPredefletterValidator(),
    });
