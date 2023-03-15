export * from "./addOrg.fn.ts";
export * from "./addOrg.val.ts";

import { coreApp } from "../../../../mod.ts";
import { addOrgFn } from "./addOrg.fn.ts";
import { addOrgValidator } from "./addOrg.val.ts";
export const addOrgSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "org",
        fn: addOrgFn,
        actName: "addOrg",
        validator: addOrgValidator(),
    });
