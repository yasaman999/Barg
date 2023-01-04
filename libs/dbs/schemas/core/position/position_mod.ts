import { string, number, InRelation, OutRelation, object, optional } from "../../../deps.ts";


export const positionPure = {

  name: string(),

};

const positionInRel = {};

const positionOutRel = {};


export const positions = () =>
  coreApp.odm.setModel(
    "position",
    positionPure,
    positionInRel ,//as Record<string, InRelation>,
    positionOutRel,
  );




