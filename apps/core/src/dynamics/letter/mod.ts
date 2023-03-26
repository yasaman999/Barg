import { addLetterSetup } from "./addLetter/mod.ts";
import { updateLetterSetup } from "./updateLetter/mod.ts";
import { getLetterSetup } from "./getLetter/mod.ts";


export * from "./addLetter/mod.ts";
export * from "./updateLetter/mod.ts";
export * from "./getLetter/mod.ts";

export const letterSetup = () => {
    addLetterSetup();
    updateLetterSetup();
    getLetterSetup();
};
