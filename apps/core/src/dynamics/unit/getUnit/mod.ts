export * from "./getUnit.fn.ts";
export * from "./getUnit.val.ts";

import { coreApp } from "../../../../mod.ts";
import { getUnitFn } from "./getUnit.fn.ts";
import { getUnitValidator } from "./getUnit.val.ts";
export const getUnitSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "unit",
        fn: getUnitFn,
        actName: "getUnit",
        validator: getUnitValidator(),
    });
