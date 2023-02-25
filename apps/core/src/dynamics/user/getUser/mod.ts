export * from "./getUser.fn.ts";
export * from "./getUser.val.ts";

import { coreApp } from "../../../../mod.ts";
import { getUserFn } from "./getUser.fn.ts";
import { getUserValidator } from "./getUser.val.ts";
export const getUserSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "user",
        fn: getUserFn,
        actName: "getUser",
        validator: getUserValidator(),
    });
