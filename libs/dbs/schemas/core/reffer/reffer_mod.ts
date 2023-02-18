import { string, number, date, boolean, array, InRelation, OutRelation, object, enums, optional } from "../../../deps.ts";

import { coreApp } from "../../../../../apps/core/mod.ts";

const refferPure = {
    // refferer : userAndPosition,
    // reffered : userAndPosition,
    number : number(),
    delivered : boolean(),
    // actions :
    type : enums(['inUnit', 'inOrg', 'outOrg']),
    created_at : date(),
    updated_at : date(),
    deadline : date(),
    isMoving : boolean(),
    description : array(object({text : string(), viewed : boolean()})),
    reply : array(object({id : string(), text : string(), viewed : boolean(),
    /* attach: [file] */}))
    // attachment : [file],
    // priority : 
}
const refferInRel = {};

const refferOutRel = {};


export const reffers = () =>
  coreApp.odm.setModel(
    "reffer",
    refferPure,
    refferInRel ,//as Record<string, InRelation>,
    refferOutRel,
  );

