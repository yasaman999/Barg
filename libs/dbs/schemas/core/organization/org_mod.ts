import { string, InRelation, OutRelation, object, optional } from "../../../deps.ts";


const orgPure = {

  name: string(),
  address : string(),
  // location :  ???
};

const orgInRel = {};

const orgOutRel = {};


export const orgs = () =>
  coreApp.odm.setModel(
    "org",
    orgPure,
    orgInRel ,//as Record<string, InRelation>,
    orgOutRel,
  );




