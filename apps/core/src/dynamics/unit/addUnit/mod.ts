export * from "./addUnit.fn.ts";
export * from "./addUnit.val.ts";

import { coreApp } from "../../../../mod.ts";
import { addUnitFn } from "./addUnit.fn.ts";
import { addUnitValidator } from "./addUnit.val.ts";
export const addUnitSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "unit",
        fn: addUnitFn,
        actName: "addUnit",
        validator: addUnitValidator(),
    });
