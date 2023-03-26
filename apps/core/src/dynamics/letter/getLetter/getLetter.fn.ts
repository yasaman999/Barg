import { letters } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { letter } from "../../../../mod.ts";
export const getLetterFn: ActFn = async (body) => {
    const {
        set: {  
            _id 
        },
        get,
    } = body.details;
    const foundedLetter = await letter.findOne({ _id: new ObjectId(_id) }, get);
    !foundedLetter && throwError("letter not exist");
    return foundedLetter;

    // console.log("foundedLetter on get method", foundedLetter);
    
};
