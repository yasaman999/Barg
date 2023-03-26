import { addPositionSetup } from "./addPosition/mod.ts";
import { updatePositionSetup } from "./updatePosition/mod.ts";
import { getPositionSetup } from "./getPosition/mod.ts";


export * from "./addPosition/mod.ts";
export * from "./updatePosition/mod.ts";
export * from "./getPosition/mod.ts";

export const positionSetup = () => {
    addPositionSetup();
    updatePositionSetup();
    getPositionSetup();
};
