import { letters } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { letter } from "../../../../mod.ts";
export const updateLetterFn: ActFn = async (body) => {
    const {
        set: {  
            _id,
            number,
            subject,
            created_at,
            updated_at,
            delivered ,
            is_end ,
            tags,
            lid
        },
        get,
    } = body.details;

    const foundedLetter = await letter.findOne({ _id: new ObjectId(_id) });
    !foundedLetter && throwError("letter not exist");

    // console.log("foundedLetter on update method", foundedLetter);
    
    const updatedLetter = await letter.updateOne({ _id: new ObjectId(_id) }, { $set: {
        number,
        subject,
        created_at,
        updated_at,
        delivered ,
        is_end ,
        tags,
        lid
    }
    });

    console.log("updatedLetter on update method", updatedLetter);

    return Object.keys(get).length != 0
        ? await letter.findOne({ _id: new ObjectId(_id) }, get)
        : { _id: _id };
};
