import { lesan, MongoClient, string, number, InRelation, OutRelation, object, ActFn, optional } from "https://deno.land/x/lesan@v-11.0.66/mod.ts";
import { users, letters } from "../../libs/dbs/schemas/core/mod.ts"
// import { ecommerceActs} from "../ecommerce/mod.ts"

const coreApp = lesan();

export const user = users();
export const letter = letters();

const client = new MongoClient();
await client.connect("mongodb://localhost:27017/barg");
const db = client.database("barg");
coreApp.odm.setDb(db);

// dynamicSetup();

coreApp.runServer({ port: 8000, typeGeneration: true, playground: false }); // ??
