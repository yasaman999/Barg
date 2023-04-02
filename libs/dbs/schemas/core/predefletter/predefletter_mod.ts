import { string, number, InRelation, OutRelation, object, optional } from "../../../deps.ts";

import { coreApp } from "../../../../../apps/core/mod.ts";

const preDefLetterPure = {
    // id ?
    title : string(),
    description : string(),
    number : number(),

}
const preDefLetterInRel = {};

const preDefLetterOutRel = {};


export const preDefLetters = () =>
  coreApp.odm.setModel(
    "preDefLetter",
    preDefLetterPure,
    preDefLetterInRel,
    preDefLetterOutRel ,
  );

