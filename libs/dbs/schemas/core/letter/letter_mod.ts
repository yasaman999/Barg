import { lesan, MongoClient, string, number, date,boolean, InRelation, OutRelation, object, ActFn, optional } from "https://deno.land/x/lesan@v-11.0.66/mod.ts";

const letterPure = {
    number : number(),
    subject : string(),
    delivered : boolean(),
    date : { 
        created_at : date(),
        updated_at : date()
    },
    is_end : {
        text : string(),//text||des ??
        done : boolean()
    },
    // attachment : file,
    tags :[string()],
    lid : string(),
    

}
const letterInRel = {};

const letterOutRel = {};


export const letters = () =>
  coreApp.odm.setModel(
    "letter",
    letterPure,
    letterInRel ,//as Record<string, InRelation>,
    letterOutRel,
  );

