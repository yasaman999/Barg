import { string, number, date,boolean, InRelation, OutRelation, object, optional, array, define } from "../../../deps.ts";

import { coreApp } from "../../../../../apps/core/mod.ts";
import { userPure } from "../user/user_mod.ts"
import { positionPure } from "../position/position_mod.ts"
import { reffers } from "../reffer/reffer_mod.ts"

const letterPure = {
    // author : userAndPosition,
    // senders : array(userAndPosition),
    // recievers : array(userAndPosition),
    number : number(),
    subject : string(),
    // viewed : array(userAndPosition),
    created_at : date(),
    updated_at : date(),
    delivered : boolean(),
    is_end : {
        text : string(), // text || des ??
        done : boolean()
    },
    // attachment : file,
    tags : array(string()),
    lid : string(),
    // reffers : array(reffer),
    
}

const letterInRel : Record<string, InRelation> = {};

const letterOutRel : Record<string, OutRelation> = {};

export const letters = () =>
  coreApp.odm.setModel(
    "letter",
    letterPure,
    letterInRel ,//as Record<string, InRelation>,
    letterOutRel,
  );

