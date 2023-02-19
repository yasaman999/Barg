import { lesan, MongoClient } from "https://deno.land/x/lesan@v0.0.66/mod.ts";
import {
  letters,
  orgs,
  positions,
  preDefLetters,
  reffers,
  units,
  users,
} from "../../libs/dbs/schemas/core/mod.ts";
import {dynamicSetup} from "./src/dynamics/mod.ts"

export const coreApp = lesan();

export const user = users();
export const letter = letters();
export const preDefLetter = preDefLetters();
export const org = orgs();
export const unit = units();
export const position = positions();
export const reffer = reffers();

export const {
    setAct,
    setService,
    getAtcsWithServices,
    getDynamicActs,
} = coreApp.acts;

export const {
    selectStruct,
    getSchemas,
} = coreApp.schemas;


const client = new MongoClient();
await client.connect("mongodb://localhost:27017/barg");
const db = client.database("barg");
coreApp.odm.setDb(db);

dynamicSetup();

coreApp.runServer({ port: 8000, typeGeneration: true, playground: false }); // ??
