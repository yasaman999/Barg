export * from "./getLetter.fn.ts";
export * from "./getLetter.val.ts";

import { coreApp } from "../../../../mod.ts";
import { getLetterFn } from "./getLetter.fn.ts";
import { getLetterValidator } from "./getLetter.val.ts";
export const getLetterSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "letter",
        fn: getLetterFn,
        actName: "getLetter",
        validator: getLetterValidator(),
    });
