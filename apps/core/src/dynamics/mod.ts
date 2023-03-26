import {userSetup} from "./user/mod.ts"
import {orgSetup} from "./org/mod.ts"
import {unitSetup} from "./unit/mod.ts"
import {letterSetup} from "./letter/mod.ts"
import {positionSetup} from "./position/mod.ts"
import {predefletterSetup} from "./predefletter/mod.ts"
import {refferSetup} from "./reffer/mod.ts"

export const dynamicSetup = () => {
    userSetup(),
    orgSetup(),
    unitSetup(),
    letterSetup(),
    positionSetup(),
    predefletterSetup(),
    refferSetup()
}