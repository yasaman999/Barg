export * from "./getOrg.fn.ts";
export * from "./getOrg.val.ts";

import { coreApp } from "../../../../mod.ts";
import { getOrgFn } from "./getOrg.fn.ts";
import { getOrgValidator } from "./getOrg.val.ts";
export const getOrgSetup = () =>
    coreApp.acts.setAct({
        type: "dynamic",
        schema: "org",
        fn: getOrgFn,
        actName: "getOrg",
        validator: getOrgValidator(),
    });
