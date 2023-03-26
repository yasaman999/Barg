export * from "./getReffer.fn.ts";
export * from "./getReffer.val.ts";

import { coreApp } from "../../../../mod.ts";
import { getRefferFn } from "./getReffer.fn.ts";
import { getRefferValidator } from "./getReffer.val.ts";
export const getRefferSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "reffer",
        fn: getRefferFn,
        actName: "getReffer",
        validator: getRefferValidator(),
    });
