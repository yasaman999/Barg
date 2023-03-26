export * from "./addPosition.fn.ts";
export * from "./addPosition.val.ts";

import { coreApp } from "../../../../mod.ts";
import { addPositionFn } from "./addPosition.fn.ts";
import { addPositionValidator } from "./addPosition.val.ts";
export const addPositionSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "position",
        fn: addPositionFn,
        actName: "addPosition",
        validator: addPositionValidator(),
    });
