import { string, number, InRelation, OutRelation, object, optional } from "../../../deps.ts";


const unitPure = {

  name: string(),
  // children : 
  // manager :
  // staffs :
  categories : array(string()),

};

const unitInRel = {};

const unitOutRel = {};


export const units = () =>
  coreApp.odm.setModel(
    "unit",
    unitPure,
    unitInRel ,//as Record<string, InRelation>,
    unitOutRel,
  );




