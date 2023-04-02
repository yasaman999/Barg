import { predefletters } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { preDefLetter } from "../../../../mod.ts";
export const getPredefletterFn: ActFn = async (body) => {
    const {
        set: {  
            _id 
        },
        get,
    } = body.details;
    const foundedPredefletter = await preDefLetter.findOne({ _id: new ObjectId(_id) }, get);
    !foundedPredefletter && throwError("predefletter not exist");
    return foundedPredefletter;

    // console.log("foundedPredefletter on get method", foundedPredefletter);
    
};
