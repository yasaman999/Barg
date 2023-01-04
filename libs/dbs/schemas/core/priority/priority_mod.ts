import { string, number, InRelation, OutRelation, object, optional } from "../../../deps.ts";


export const priorityPure = {};

const priorityInRel = {};

const priorityOutRel = {};


export const prioritys = () =>
  coreApp.odm.setModel(
    "priority",
    priorityPure,
    priorityInRel , // as Record<string, InRelation>,
    priorityOutRel,
  );




