import { string, number, InRelation, OutRelation, object, optional } from "../../../deps.ts";


export const forPure = {};

const forInRel = {};

const forOutRel = {};


export const fors = () =>
  coreApp.odm.setModel(
    "for",
    forPure,
    forInRel ,//as Record<string, InRelation>,
    forOutRel,
  );