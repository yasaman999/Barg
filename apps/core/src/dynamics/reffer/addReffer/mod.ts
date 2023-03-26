export * from "./addReffer.fn.ts";
export * from "./addReffer.val.ts";

import { coreApp } from "../../../../mod.ts";
import { addRefferFn } from "./addReffer.fn.ts";
import { addRefferValidator } from "./addReffer.val.ts";
export const addRefferSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "reffer",
        fn: addRefferFn,
        actName: "addReffer",
        validator: addRefferValidator(),
    });
