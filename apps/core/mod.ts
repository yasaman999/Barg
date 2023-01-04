import { lesan, MongoClient, string, number, InRelation, OutRelation, object, ActFn, optional } from "https://deno.land/x/lesan@v-11.0.66/mod.ts";
import { users, letters, preDefLetters, orgs, units, positions, reffers } from "../../libs/dbs/schemas/core/mod.ts"
// import { ecommerceActs} from "../ecommerce/mod.ts"

const coreApp = lesan();

export const user = users();
export const letter = letters();
export const preDefLetter = preDefLetters();
export const org = orgs();
export const unit = units();
export const position = positions();
export const reffer = reffers();


const client = new MongoClient();
await client.connect("mongodb://localhost:27017/barg");
const db = client.database("barg");
coreApp.odm.setDb(db);

// dynamicSetup();

coreApp.runServer({ port: 8000, typeGeneration: true, playground: false }); // ??
