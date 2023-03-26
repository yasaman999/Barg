import { addPredefletterSetup } from "./addPredefletter/mod.ts";
import { updatePredefletterSetup } from "./updatePredefletter/mod.ts";
import { getPredefletterSetup } from "./getPredefletter/mod.ts";


export * from "./addPredefletter/mod.ts";
export * from "./updatePredefletter/mod.ts";
export * from "./getPredefletter/mod.ts";

export const predefletterSetup = () => {
    addPredefletterSetup();
    updatePredefletterSetup();
    getPredefletterSetup();
};
