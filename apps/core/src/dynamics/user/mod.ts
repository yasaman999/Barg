import { addUserSetup } from "./addUser/mod.ts";
import { updateUserSetup } from "./updateUser/mod.ts";
import { getUserSetup } from "./getUser/mod.ts";


export * from "./addUser/mod.ts";
export * from "./updateUser/mod.ts";

export * from "./getUser/mod.ts";

export const userSetup = () => {
    addUserSetup();
    updateUserSetup();
    getUserSetup();
};
