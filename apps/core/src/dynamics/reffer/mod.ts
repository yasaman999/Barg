import { addRefferSetup } from "./addReffer/mod.ts";
import { updateRefferSetup } from "./updateReffer/mod.ts";
import { getRefferSetup } from "./getReffer/mod.ts";


export * from "./addReffer/mod.ts";
export * from "./updateReffer/mod.ts";
export * from "./getReffer/mod.ts";

export const refferSetup = () => {
    addRefferSetup();
    updateRefferSetup();
    getRefferSetup();
};
