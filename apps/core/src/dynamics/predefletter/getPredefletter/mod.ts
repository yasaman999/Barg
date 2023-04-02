export * from "./getPredefletter.fn.ts";
export * from "./getPredefletter.val.ts";

import { coreApp } from "../../../../mod.ts";
import { getPredefletterFn } from "./getPredefletter.fn.ts";
import { getPredefletterValidator } from "./getPredefletter.val.ts";
export const getPredefletterSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "preDefLetter",
        fn: getPredefletterFn,
        actName: "getPredefletter",
        validator: getPredefletterValidator(),
    });
