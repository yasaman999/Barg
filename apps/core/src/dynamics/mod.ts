import {userSetup} from "./user/mod.ts"
import {orgSetup} from "./org/mod.ts"

export const dynamicSetup = () => {
    userSetup(),
    orgSetup()
}