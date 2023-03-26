import { addUnitSetup } from "./addUnit/mod.ts";
import { updateUnitSetup } from "./updateUnit/mod.ts";
import { getUnitSetup } from "./getUnit/mod.ts";


export * from "./addUnit/mod.ts";
export * from "./updateUnit/mod.ts";
export * from "./getUnit/mod.ts";

export const unitSetup = () => {
    addUnitSetup();
    updateUnitSetup();
    getUnitSetup();
};
