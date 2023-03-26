export * from "./getPosition.fn.ts";
export * from "./getPosition.val.ts";

import { coreApp } from "../../../../mod.ts";
import { getPositionFn } from "./getPosition.fn.ts";
import { getPositionValidator } from "./getPosition.val.ts";
export const getPositionSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "position",
        fn: getPositionFn,
        actName: "getPosition",
        validator: getPositionValidator(),
    });
