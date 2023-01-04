import { string, number, InRelation, OutRelation, object, optional } from "../../../deps.ts";

const preDefLetterPure = {
    // id ?
    title : string(),
    description : string(),
    number : number(),

}
const preDefLetterInRel = {};

const preDeLetterOutRel = {};


export const preDefLetters = () =>
  coreApp.odm.setModel(
    "letter",
    preDeLetterPure,
    preDefLetterInRel,
    preDefLetterOutRel ,
  );

