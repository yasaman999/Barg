import { addOrgSetup } from "./addOrg/mod.ts";
import { updateOrgSetup } from "./updateOrg/mod.ts";
import { getOrgSetup } from "./getOrg/mod.ts";


export * from "./addOrg/mod.ts";
export * from "./updateOrg/mod.ts";
export * from "./getOrg/mod.ts";

export const orgSetup = () => {
    addOrgSetup();
    updateOrgSetup();
    getOrgSetup();
};
